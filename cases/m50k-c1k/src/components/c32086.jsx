import React from 'react';
const LABEL_32086 = 'component_32086';
export function Component32086({ value = 32086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32086, 'data-value': derived.doubled }, children);
}
export default Component32086;
