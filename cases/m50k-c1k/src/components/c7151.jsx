import React from 'react';
const LABEL_7151 = 'component_7151';
export function Component7151({ value = 7151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7151, 'data-value': derived.doubled }, children);
}
export default Component7151;
