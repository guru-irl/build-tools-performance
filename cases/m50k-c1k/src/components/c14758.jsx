import React from 'react';
const LABEL_14758 = 'component_14758';
export function Component14758({ value = 14758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14758, 'data-value': derived.doubled }, children);
}
export default Component14758;
