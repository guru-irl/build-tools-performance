import React from 'react';
const LABEL_39788 = 'component_39788';
export function Component39788({ value = 39788, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39788, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39788, 'data-value': derived.doubled }, children);
}
export default Component39788;
