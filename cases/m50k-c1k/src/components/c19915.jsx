import React from 'react';
const LABEL_19915 = 'component_19915';
export function Component19915({ value = 19915, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19915, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19915, 'data-value': derived.doubled }, children);
}
export default Component19915;
