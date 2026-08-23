import React from 'react';
const LABEL_4280 = 'component_4280';
export function Component4280({ value = 4280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4280, 'data-value': derived.doubled }, children);
}
export default Component4280;
