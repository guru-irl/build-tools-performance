import React from 'react';
const LABEL_18510 = 'component_18510';
export function Component18510({ value = 18510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18510, 'data-value': derived.doubled }, children);
}
export default Component18510;
