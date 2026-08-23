import React from 'react';
const LABEL_25520 = 'component_25520';
export function Component25520({ value = 25520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25520, 'data-value': derived.doubled }, children);
}
export default Component25520;
