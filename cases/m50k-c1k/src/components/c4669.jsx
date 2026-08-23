import React from 'react';
const LABEL_4669 = 'component_4669';
export function Component4669({ value = 4669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4669, 'data-value': derived.doubled }, children);
}
export default Component4669;
