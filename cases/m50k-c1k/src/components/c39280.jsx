import React from 'react';
const LABEL_39280 = 'component_39280';
export function Component39280({ value = 39280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39280, 'data-value': derived.doubled }, children);
}
export default Component39280;
