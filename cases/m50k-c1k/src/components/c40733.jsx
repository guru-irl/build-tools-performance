import React from 'react';
const LABEL_40733 = 'component_40733';
export function Component40733({ value = 40733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40733, 'data-value': derived.doubled }, children);
}
export default Component40733;
