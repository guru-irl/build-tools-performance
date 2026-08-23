import React from 'react';
const LABEL_34511 = 'component_34511';
export function Component34511({ value = 34511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34511, 'data-value': derived.doubled }, children);
}
export default Component34511;
