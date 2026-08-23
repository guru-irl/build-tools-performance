import React from 'react';
const LABEL_45394 = 'component_45394';
export function Component45394({ value = 45394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45394, 'data-value': derived.doubled }, children);
}
export default Component45394;
