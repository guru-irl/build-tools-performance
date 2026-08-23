import React from 'react';
const LABEL_22462 = 'component_22462';
export function Component22462({ value = 22462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22462, 'data-value': derived.doubled }, children);
}
export default Component22462;
