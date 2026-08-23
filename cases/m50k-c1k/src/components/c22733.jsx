import React from 'react';
const LABEL_22733 = 'component_22733';
export function Component22733({ value = 22733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22733, 'data-value': derived.doubled }, children);
}
export default Component22733;
