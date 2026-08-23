import React from 'react';
const LABEL_18331 = 'component_18331';
export function Component18331({ value = 18331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18331, 'data-value': derived.doubled }, children);
}
export default Component18331;
