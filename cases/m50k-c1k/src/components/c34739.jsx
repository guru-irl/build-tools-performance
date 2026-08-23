import React from 'react';
const LABEL_34739 = 'component_34739';
export function Component34739({ value = 34739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34739, 'data-value': derived.doubled }, children);
}
export default Component34739;
