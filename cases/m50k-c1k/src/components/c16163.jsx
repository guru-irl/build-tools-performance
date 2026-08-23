import React from 'react';
const LABEL_16163 = 'component_16163';
export function Component16163({ value = 16163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16163, 'data-value': derived.doubled }, children);
}
export default Component16163;
