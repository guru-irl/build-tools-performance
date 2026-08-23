import React from 'react';
const LABEL_6001 = 'component_6001';
export function Component6001({ value = 6001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6001, 'data-value': derived.doubled }, children);
}
export default Component6001;
