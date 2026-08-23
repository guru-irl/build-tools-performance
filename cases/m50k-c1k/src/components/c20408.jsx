import React from 'react';
const LABEL_20408 = 'component_20408';
export function Component20408({ value = 20408, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20408, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20408, 'data-value': derived.doubled }, children);
}
export default Component20408;
