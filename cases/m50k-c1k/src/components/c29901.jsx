import React from 'react';
const LABEL_29901 = 'component_29901';
export function Component29901({ value = 29901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29901, 'data-value': derived.doubled }, children);
}
export default Component29901;
