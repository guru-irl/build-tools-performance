import React from 'react';
const LABEL_18077 = 'component_18077';
export function Component18077({ value = 18077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18077, 'data-value': derived.doubled }, children);
}
export default Component18077;
