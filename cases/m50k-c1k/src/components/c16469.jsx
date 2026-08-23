import React from 'react';
const LABEL_16469 = 'component_16469';
export function Component16469({ value = 16469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16469, 'data-value': derived.doubled }, children);
}
export default Component16469;
