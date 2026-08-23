import React from 'react';
const LABEL_129 = 'component_129';
export function Component129({ value = 129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_129, 'data-value': derived.doubled }, children);
}
export default Component129;
