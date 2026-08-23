import React from 'react';
const LABEL_27569 = 'component_27569';
export function Component27569({ value = 27569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27569, 'data-value': derived.doubled }, children);
}
export default Component27569;
