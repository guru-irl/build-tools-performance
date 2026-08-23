import React from 'react';
const LABEL_3537 = 'component_3537';
export function Component3537({ value = 3537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3537, 'data-value': derived.doubled }, children);
}
export default Component3537;
