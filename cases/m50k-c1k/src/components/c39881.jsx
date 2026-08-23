import React from 'react';
const LABEL_39881 = 'component_39881';
export function Component39881({ value = 39881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39881, 'data-value': derived.doubled }, children);
}
export default Component39881;
