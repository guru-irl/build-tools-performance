import React from 'react';
const LABEL_42907 = 'component_42907';
export function Component42907({ value = 42907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42907, 'data-value': derived.doubled }, children);
}
export default Component42907;
