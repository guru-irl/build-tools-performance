import React from 'react';
const LABEL_14117 = 'component_14117';
export function Component14117({ value = 14117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14117, 'data-value': derived.doubled }, children);
}
export default Component14117;
