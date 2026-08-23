import React from 'react';
const LABEL_29236 = 'component_29236';
export function Component29236({ value = 29236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29236, 'data-value': derived.doubled }, children);
}
export default Component29236;
