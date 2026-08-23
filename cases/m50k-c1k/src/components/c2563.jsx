import React from 'react';
const LABEL_2563 = 'component_2563';
export function Component2563({ value = 2563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2563, 'data-value': derived.doubled }, children);
}
export default Component2563;
