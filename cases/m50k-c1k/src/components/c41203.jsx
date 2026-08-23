import React from 'react';
const LABEL_41203 = 'component_41203';
export function Component41203({ value = 41203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41203, 'data-value': derived.doubled }, children);
}
export default Component41203;
