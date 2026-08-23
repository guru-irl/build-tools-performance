import React from 'react';
const LABEL_14626 = 'component_14626';
export function Component14626({ value = 14626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14626, 'data-value': derived.doubled }, children);
}
export default Component14626;
