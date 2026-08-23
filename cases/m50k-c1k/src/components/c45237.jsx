import React from 'react';
const LABEL_45237 = 'component_45237';
export function Component45237({ value = 45237, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45237, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45237, 'data-value': derived.doubled }, children);
}
export default Component45237;
