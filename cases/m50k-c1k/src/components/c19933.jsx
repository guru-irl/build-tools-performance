import React from 'react';
const LABEL_19933 = 'component_19933';
export function Component19933({ value = 19933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19933, 'data-value': derived.doubled }, children);
}
export default Component19933;
