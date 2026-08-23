import React from 'react';
const LABEL_4653 = 'component_4653';
export function Component4653({ value = 4653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4653, 'data-value': derived.doubled }, children);
}
export default Component4653;
