import React from 'react';
const LABEL_6901 = 'component_6901';
export function Component6901({ value = 6901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6901, 'data-value': derived.doubled }, children);
}
export default Component6901;
