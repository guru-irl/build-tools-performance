import React from 'react';
const LABEL_14570 = 'component_14570';
export function Component14570({ value = 14570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14570, 'data-value': derived.doubled }, children);
}
export default Component14570;
