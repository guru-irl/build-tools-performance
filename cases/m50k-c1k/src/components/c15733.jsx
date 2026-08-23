import React from 'react';
const LABEL_15733 = 'component_15733';
export function Component15733({ value = 15733, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15733, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15733, 'data-value': derived.doubled }, children);
}
export default Component15733;
