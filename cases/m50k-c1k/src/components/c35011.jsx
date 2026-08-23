import React from 'react';
const LABEL_35011 = 'component_35011';
export function Component35011({ value = 35011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35011, 'data-value': derived.doubled }, children);
}
export default Component35011;
