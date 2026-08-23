import React from 'react';
const LABEL_4761 = 'component_4761';
export function Component4761({ value = 4761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4761, 'data-value': derived.doubled }, children);
}
export default Component4761;
