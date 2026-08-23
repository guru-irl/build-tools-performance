import React from 'react';
const LABEL_19608 = 'component_19608';
export function Component19608({ value = 19608, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19608, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19608, 'data-value': derived.doubled }, children);
}
export default Component19608;
