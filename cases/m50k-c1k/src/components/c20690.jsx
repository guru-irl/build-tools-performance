import React from 'react';
const LABEL_20690 = 'component_20690';
export function Component20690({ value = 20690, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20690, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20690, 'data-value': derived.doubled }, children);
}
export default Component20690;
