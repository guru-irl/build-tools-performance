import React from 'react';
const LABEL_20000 = 'component_20000';
export function Component20000({ value = 20000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20000, 'data-value': derived.doubled }, children);
}
export default Component20000;
