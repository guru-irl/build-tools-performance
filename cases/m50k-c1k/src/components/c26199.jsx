import React from 'react';
const LABEL_26199 = 'component_26199';
export function Component26199({ value = 26199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26199, 'data-value': derived.doubled }, children);
}
export default Component26199;
