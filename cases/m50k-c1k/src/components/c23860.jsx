import React from 'react';
const LABEL_23860 = 'component_23860';
export function Component23860({ value = 23860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23860, 'data-value': derived.doubled }, children);
}
export default Component23860;
