import React from 'react';
const LABEL_22975 = 'component_22975';
export function Component22975({ value = 22975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22975, 'data-value': derived.doubled }, children);
}
export default Component22975;
