import React from 'react';
const LABEL_29669 = 'component_29669';
export function Component29669({ value = 29669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29669, 'data-value': derived.doubled }, children);
}
export default Component29669;
