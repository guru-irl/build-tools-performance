import React from 'react';
const LABEL_18280 = 'component_18280';
export function Component18280({ value = 18280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18280, 'data-value': derived.doubled }, children);
}
export default Component18280;
