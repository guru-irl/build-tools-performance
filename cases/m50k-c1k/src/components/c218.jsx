import React from 'react';
const LABEL_218 = 'component_218';
export function Component218({ value = 218, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_218, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_218, 'data-value': derived.doubled }, children);
}
export default Component218;
