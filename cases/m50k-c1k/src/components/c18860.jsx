import React from 'react';
const LABEL_18860 = 'component_18860';
export function Component18860({ value = 18860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18860, 'data-value': derived.doubled }, children);
}
export default Component18860;
