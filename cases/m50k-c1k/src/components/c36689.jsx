import React from 'react';
const LABEL_36689 = 'component_36689';
export function Component36689({ value = 36689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36689, 'data-value': derived.doubled }, children);
}
export default Component36689;
