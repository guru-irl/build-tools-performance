import React from 'react';
const LABEL_22191 = 'component_22191';
export function Component22191({ value = 22191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22191, 'data-value': derived.doubled }, children);
}
export default Component22191;
