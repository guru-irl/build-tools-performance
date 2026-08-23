import React from 'react';
const LABEL_8733 = 'component_8733';
export function Component8733({ value = 8733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8733, 'data-value': derived.doubled }, children);
}
export default Component8733;
