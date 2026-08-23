import React from 'react';
const LABEL_20533 = 'component_20533';
export function Component20533({ value = 20533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20533, 'data-value': derived.doubled }, children);
}
export default Component20533;
