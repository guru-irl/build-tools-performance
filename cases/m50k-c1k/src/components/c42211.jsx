import React from 'react';
const LABEL_42211 = 'component_42211';
export function Component42211({ value = 42211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42211, 'data-value': derived.doubled }, children);
}
export default Component42211;
