import React from 'react';
const LABEL_4758 = 'component_4758';
export function Component4758({ value = 4758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4758, 'data-value': derived.doubled }, children);
}
export default Component4758;
