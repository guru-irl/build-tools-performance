import React from 'react';
const LABEL_26066 = 'component_26066';
export function Component26066({ value = 26066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26066, 'data-value': derived.doubled }, children);
}
export default Component26066;
