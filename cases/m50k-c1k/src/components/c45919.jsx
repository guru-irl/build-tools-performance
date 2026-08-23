import React from 'react';
const LABEL_45919 = 'component_45919';
export function Component45919({ value = 45919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45919, 'data-value': derived.doubled }, children);
}
export default Component45919;
