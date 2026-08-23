import React from 'react';
const LABEL_42171 = 'component_42171';
export function Component42171({ value = 42171, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42171, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42171, 'data-value': derived.doubled }, children);
}
export default Component42171;
