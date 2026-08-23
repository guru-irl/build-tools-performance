import React from 'react';
const LABEL_35502 = 'component_35502';
export function Component35502({ value = 35502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35502, 'data-value': derived.doubled }, children);
}
export default Component35502;
