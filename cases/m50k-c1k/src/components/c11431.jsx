import React from 'react';
const LABEL_11431 = 'component_11431';
export function Component11431({ value = 11431, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11431, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11431, 'data-value': derived.doubled }, children);
}
export default Component11431;
