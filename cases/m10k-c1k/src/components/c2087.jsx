import React from 'react';
const LABEL_2087 = 'component_2087';
export function Component2087({ value = 2087, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2087, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2087, 'data-value': derived.doubled }, children);
}
export default Component2087;
