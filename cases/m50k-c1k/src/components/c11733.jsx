import React from 'react';
const LABEL_11733 = 'component_11733';
export function Component11733({ value = 11733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11733, 'data-value': derived.doubled }, children);
}
export default Component11733;
