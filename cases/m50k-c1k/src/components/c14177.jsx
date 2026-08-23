import React from 'react';
const LABEL_14177 = 'component_14177';
export function Component14177({ value = 14177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14177, 'data-value': derived.doubled }, children);
}
export default Component14177;
