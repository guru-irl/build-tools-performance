import React from 'react';
const LABEL_28203 = 'component_28203';
export function Component28203({ value = 28203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28203, 'data-value': derived.doubled }, children);
}
export default Component28203;
