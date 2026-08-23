import React from 'react';
const LABEL_23998 = 'component_23998';
export function Component23998({ value = 23998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23998, 'data-value': derived.doubled }, children);
}
export default Component23998;
