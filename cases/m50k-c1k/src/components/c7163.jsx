import React from 'react';
const LABEL_7163 = 'component_7163';
export function Component7163({ value = 7163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7163, 'data-value': derived.doubled }, children);
}
export default Component7163;
