import React from 'react';
const LABEL_42946 = 'component_42946';
export function Component42946({ value = 42946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42946, 'data-value': derived.doubled }, children);
}
export default Component42946;
