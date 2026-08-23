import React from 'react';
const LABEL_26163 = 'component_26163';
export function Component26163({ value = 26163, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26163, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26163, 'data-value': derived.doubled }, children);
}
export default Component26163;
