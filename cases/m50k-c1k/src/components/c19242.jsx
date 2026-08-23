import React from 'react';
const LABEL_19242 = 'component_19242';
export function Component19242({ value = 19242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19242, 'data-value': derived.doubled }, children);
}
export default Component19242;
