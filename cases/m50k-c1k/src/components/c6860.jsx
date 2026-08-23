import React from 'react';
const LABEL_6860 = 'component_6860';
export function Component6860({ value = 6860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6860, 'data-value': derived.doubled }, children);
}
export default Component6860;
