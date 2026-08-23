import React from 'react';
const LABEL_20147 = 'component_20147';
export function Component20147({ value = 20147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20147, 'data-value': derived.doubled }, children);
}
export default Component20147;
