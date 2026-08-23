import React from 'react';
const LABEL_26733 = 'component_26733';
export function Component26733({ value = 26733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26733, 'data-value': derived.doubled }, children);
}
export default Component26733;
