import React from 'react';
const LABEL_14743 = 'component_14743';
export function Component14743({ value = 14743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14743, 'data-value': derived.doubled }, children);
}
export default Component14743;
