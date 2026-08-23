import React from 'react';
const LABEL_15482 = 'component_15482';
export function Component15482({ value = 15482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15482, 'data-value': derived.doubled }, children);
}
export default Component15482;
