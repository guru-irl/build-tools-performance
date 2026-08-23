import React from 'react';
const LABEL_14203 = 'component_14203';
export function Component14203({ value = 14203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14203, 'data-value': derived.doubled }, children);
}
export default Component14203;
