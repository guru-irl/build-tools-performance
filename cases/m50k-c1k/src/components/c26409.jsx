import React from 'react';
const LABEL_26409 = 'component_26409';
export function Component26409({ value = 26409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26409, 'data-value': derived.doubled }, children);
}
export default Component26409;
