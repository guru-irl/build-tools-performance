import React from 'react';
const LABEL_14217 = 'component_14217';
export function Component14217({ value = 14217, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14217, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14217, 'data-value': derived.doubled }, children);
}
export default Component14217;
