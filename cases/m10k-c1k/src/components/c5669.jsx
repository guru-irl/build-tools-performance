import React from 'react';
const LABEL_5669 = 'component_5669';
export function Component5669({ value = 5669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5669, 'data-value': derived.doubled }, children);
}
export default Component5669;
