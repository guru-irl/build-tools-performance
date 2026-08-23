import React from 'react';
const LABEL_25669 = 'component_25669';
export function Component25669({ value = 25669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25669, 'data-value': derived.doubled }, children);
}
export default Component25669;
