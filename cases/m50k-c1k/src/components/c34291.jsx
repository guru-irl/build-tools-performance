import React from 'react';
const LABEL_34291 = 'component_34291';
export function Component34291({ value = 34291, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34291, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34291, 'data-value': derived.doubled }, children);
}
export default Component34291;
