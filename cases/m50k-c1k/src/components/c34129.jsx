import React from 'react';
const LABEL_34129 = 'component_34129';
export function Component34129({ value = 34129, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34129, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34129, 'data-value': derived.doubled }, children);
}
export default Component34129;
