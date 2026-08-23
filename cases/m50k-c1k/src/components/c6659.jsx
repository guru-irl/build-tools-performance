import React from 'react';
const LABEL_6659 = 'component_6659';
export function Component6659({ value = 6659, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6659, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6659, 'data-value': derived.doubled }, children);
}
export default Component6659;
