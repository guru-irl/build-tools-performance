import React from 'react';
const LABEL_20163 = 'component_20163';
export function Component20163({ value = 20163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20163, 'data-value': derived.doubled }, children);
}
export default Component20163;
