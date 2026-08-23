import React from 'react';
const LABEL_20763 = 'component_20763';
export function Component20763({ value = 20763, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20763, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20763, 'data-value': derived.doubled }, children);
}
export default Component20763;
