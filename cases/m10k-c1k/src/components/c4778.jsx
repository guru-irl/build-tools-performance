import React from 'react';
const LABEL_4778 = 'component_4778';
export function Component4778({ value = 4778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4778, 'data-value': derived.doubled }, children);
}
export default Component4778;
