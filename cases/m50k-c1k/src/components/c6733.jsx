import React from 'react';
const LABEL_6733 = 'component_6733';
export function Component6733({ value = 6733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6733, 'data-value': derived.doubled }, children);
}
export default Component6733;
