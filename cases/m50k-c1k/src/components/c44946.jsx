import React from 'react';
const LABEL_44946 = 'component_44946';
export function Component44946({ value = 44946, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44946, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44946, 'data-value': derived.doubled }, children);
}
export default Component44946;
