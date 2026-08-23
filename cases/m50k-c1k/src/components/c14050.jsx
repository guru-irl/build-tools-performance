import React from 'react';
const LABEL_14050 = 'component_14050';
export function Component14050({ value = 14050, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14050, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14050, 'data-value': derived.doubled }, children);
}
export default Component14050;
