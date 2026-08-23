import React from 'react';
const LABEL_42071 = 'component_42071';
export function Component42071({ value = 42071, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42071, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42071, 'data-value': derived.doubled }, children);
}
export default Component42071;
