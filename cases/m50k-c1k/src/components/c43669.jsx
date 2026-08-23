import React from 'react';
const LABEL_43669 = 'component_43669';
export function Component43669({ value = 43669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43669, 'data-value': derived.doubled }, children);
}
export default Component43669;
