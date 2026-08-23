import React from 'react';
const LABEL_19589 = 'component_19589';
export function Component19589({ value = 19589, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19589, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19589, 'data-value': derived.doubled }, children);
}
export default Component19589;
