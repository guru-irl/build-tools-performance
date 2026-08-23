import React from 'react';
const LABEL_3958 = 'component_3958';
export function Component3958({ value = 3958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3958, 'data-value': derived.doubled }, children);
}
export default Component3958;
