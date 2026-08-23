import React from 'react';
const LABEL_39057 = 'component_39057';
export function Component39057({ value = 39057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39057, 'data-value': derived.doubled }, children);
}
export default Component39057;
