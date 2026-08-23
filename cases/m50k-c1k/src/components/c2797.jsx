import React from 'react';
const LABEL_2797 = 'component_2797';
export function Component2797({ value = 2797, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2797, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2797, 'data-value': derived.doubled }, children);
}
export default Component2797;
