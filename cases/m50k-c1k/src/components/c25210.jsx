import React from 'react';
const LABEL_25210 = 'component_25210';
export function Component25210({ value = 25210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25210, 'data-value': derived.doubled }, children);
}
export default Component25210;
