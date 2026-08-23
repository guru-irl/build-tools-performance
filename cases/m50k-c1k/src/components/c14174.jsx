import React from 'react';
const LABEL_14174 = 'component_14174';
export function Component14174({ value = 14174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14174, 'data-value': derived.doubled }, children);
}
export default Component14174;
