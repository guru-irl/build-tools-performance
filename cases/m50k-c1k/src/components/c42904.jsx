import React from 'react';
const LABEL_42904 = 'component_42904';
export function Component42904({ value = 42904, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42904, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42904, 'data-value': derived.doubled }, children);
}
export default Component42904;
