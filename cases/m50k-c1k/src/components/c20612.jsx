import React from 'react';
const LABEL_20612 = 'component_20612';
export function Component20612({ value = 20612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20612, 'data-value': derived.doubled }, children);
}
export default Component20612;
