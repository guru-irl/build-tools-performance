import React from 'react';
const LABEL_34343 = 'component_34343';
export function Component34343({ value = 34343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34343, 'data-value': derived.doubled }, children);
}
export default Component34343;
