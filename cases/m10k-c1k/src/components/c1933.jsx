import React from 'react';
const LABEL_1933 = 'component_1933';
export function Component1933({ value = 1933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1933, 'data-value': derived.doubled }, children);
}
export default Component1933;
