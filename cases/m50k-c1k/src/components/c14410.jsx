import React from 'react';
const LABEL_14410 = 'component_14410';
export function Component14410({ value = 14410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14410, 'data-value': derived.doubled }, children);
}
export default Component14410;
