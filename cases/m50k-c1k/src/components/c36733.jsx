import React from 'react';
const LABEL_36733 = 'component_36733';
export function Component36733({ value = 36733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36733, 'data-value': derived.doubled }, children);
}
export default Component36733;
