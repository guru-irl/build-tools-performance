import React from 'react';
const LABEL_32470 = 'component_32470';
export function Component32470({ value = 32470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32470, 'data-value': derived.doubled }, children);
}
export default Component32470;
