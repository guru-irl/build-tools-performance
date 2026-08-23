import React from 'react';
const LABEL_4181 = 'component_4181';
export function Component4181({ value = 4181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4181, 'data-value': derived.doubled }, children);
}
export default Component4181;
