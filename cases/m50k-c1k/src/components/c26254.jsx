import React from 'react';
const LABEL_26254 = 'component_26254';
export function Component26254({ value = 26254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26254, 'data-value': derived.doubled }, children);
}
export default Component26254;
