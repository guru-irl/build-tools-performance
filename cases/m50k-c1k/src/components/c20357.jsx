import React from 'react';
const LABEL_20357 = 'component_20357';
export function Component20357({ value = 20357, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20357, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20357, 'data-value': derived.doubled }, children);
}
export default Component20357;
