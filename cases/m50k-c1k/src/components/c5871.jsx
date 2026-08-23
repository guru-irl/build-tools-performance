import React from 'react';
const LABEL_5871 = 'component_5871';
export function Component5871({ value = 5871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5871, 'data-value': derived.doubled }, children);
}
export default Component5871;
