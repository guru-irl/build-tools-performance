import React from 'react';
const LABEL_3422 = 'component_3422';
export function Component3422({ value = 3422, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3422, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3422, 'data-value': derived.doubled }, children);
}
export default Component3422;
