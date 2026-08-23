import React from 'react';
const LABEL_14733 = 'component_14733';
export function Component14733({ value = 14733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14733, 'data-value': derived.doubled }, children);
}
export default Component14733;
