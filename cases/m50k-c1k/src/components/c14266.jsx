import React from 'react';
const LABEL_14266 = 'component_14266';
export function Component14266({ value = 14266, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14266, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14266, 'data-value': derived.doubled }, children);
}
export default Component14266;
