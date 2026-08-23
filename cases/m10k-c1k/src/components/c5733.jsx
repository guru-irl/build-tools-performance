import React from 'react';
const LABEL_5733 = 'component_5733';
export function Component5733({ value = 5733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5733, 'data-value': derived.doubled }, children);
}
export default Component5733;
