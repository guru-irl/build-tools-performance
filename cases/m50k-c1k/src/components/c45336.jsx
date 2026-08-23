import React from 'react';
const LABEL_45336 = 'component_45336';
export function Component45336({ value = 45336, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45336, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45336, 'data-value': derived.doubled }, children);
}
export default Component45336;
