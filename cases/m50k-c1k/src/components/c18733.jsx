import React from 'react';
const LABEL_18733 = 'component_18733';
export function Component18733({ value = 18733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18733, 'data-value': derived.doubled }, children);
}
export default Component18733;
