import React from 'react';
const LABEL_8155 = 'component_8155';
export function Component8155({ value = 8155, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8155, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8155, 'data-value': derived.doubled }, children);
}
export default Component8155;
