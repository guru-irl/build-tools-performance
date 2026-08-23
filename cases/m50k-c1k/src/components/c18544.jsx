import React from 'react';
const LABEL_18544 = 'component_18544';
export function Component18544({ value = 18544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18544, 'data-value': derived.doubled }, children);
}
export default Component18544;
