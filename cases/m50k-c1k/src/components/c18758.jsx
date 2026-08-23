import React from 'react';
const LABEL_18758 = 'component_18758';
export function Component18758({ value = 18758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18758, 'data-value': derived.doubled }, children);
}
export default Component18758;
