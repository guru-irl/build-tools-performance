import React from 'react';
const LABEL_18188 = 'component_18188';
export function Component18188({ value = 18188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18188, 'data-value': derived.doubled }, children);
}
export default Component18188;
