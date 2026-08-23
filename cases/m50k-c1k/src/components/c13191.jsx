import React from 'react';
const LABEL_13191 = 'component_13191';
export function Component13191({ value = 13191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13191, 'data-value': derived.doubled }, children);
}
export default Component13191;
