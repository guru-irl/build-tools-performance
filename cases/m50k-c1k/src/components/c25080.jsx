import React from 'react';
const LABEL_25080 = 'component_25080';
export function Component25080({ value = 25080, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25080, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25080, 'data-value': derived.doubled }, children);
}
export default Component25080;
