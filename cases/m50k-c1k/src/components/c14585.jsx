import React from 'react';
const LABEL_14585 = 'component_14585';
export function Component14585({ value = 14585, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14585, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14585, 'data-value': derived.doubled }, children);
}
export default Component14585;
