import React from 'react';
const LABEL_14590 = 'component_14590';
export function Component14590({ value = 14590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14590, 'data-value': derived.doubled }, children);
}
export default Component14590;
