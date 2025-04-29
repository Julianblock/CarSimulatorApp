import math

class CarSimulator:
    def __init__(self, wheelbase, v0, theta0):
        self.wheelbase = wheelbase
        self.x = 0 # horizontal movement
        self.y = 0 # vertical movement
        self.v = v0 # velocity of the vehicle
        self.theta = theta0 # angle of the vehicle

    def simulatorStep(self, a, wheel_angle, dt):
        # New velocity = current velocity + (acceleration * time step)
        self.v += a * dt
        if wheel_angle != 0:
            turning_radius = self.wheelbase / math.tan(wheel_angle)
            angular_velocity = self.v / turning_radius
            self.theta += angular_velocity * dt
        
        # cos(theta) gives the projection of the velocity along the x-axis.
        self.x += self.v * math.cos(self.theta) * dt

        # sin(theta) gives the projection of the velocity along the y-axis.
        self.y += self.v * math.sin(self.theta) * dt