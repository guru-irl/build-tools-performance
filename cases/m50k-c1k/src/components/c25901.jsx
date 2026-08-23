import React from 'react';
const LABEL_25901 = 'component_25901';
export function Component25901({ value = 25901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25901, 'data-value': derived.doubled }, children);
}
export default Component25901;
