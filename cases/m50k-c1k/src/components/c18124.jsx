import React from 'react';
const LABEL_18124 = 'component_18124';
export function Component18124({ value = 18124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18124, 'data-value': derived.doubled }, children);
}
export default Component18124;
