import React from 'react';
const LABEL_32968 = 'component_32968';
export function Component32968({ value = 32968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32968, 'data-value': derived.doubled }, children);
}
export default Component32968;
