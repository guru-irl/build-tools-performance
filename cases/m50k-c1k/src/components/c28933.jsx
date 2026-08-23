import React from 'react';
const LABEL_28933 = 'component_28933';
export function Component28933({ value = 28933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28933, 'data-value': derived.doubled }, children);
}
export default Component28933;
