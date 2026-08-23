import React from 'react';
const LABEL_25254 = 'component_25254';
export function Component25254({ value = 25254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25254, 'data-value': derived.doubled }, children);
}
export default Component25254;
