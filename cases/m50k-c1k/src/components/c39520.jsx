import React from 'react';
const LABEL_39520 = 'component_39520';
export function Component39520({ value = 39520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39520, 'data-value': derived.doubled }, children);
}
export default Component39520;
