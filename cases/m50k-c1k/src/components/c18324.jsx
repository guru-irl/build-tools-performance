import React from 'react';
const LABEL_18324 = 'component_18324';
export function Component18324({ value = 18324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18324, 'data-value': derived.doubled }, children);
}
export default Component18324;
