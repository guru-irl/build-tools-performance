import React from 'react';
const LABEL_26834 = 'component_26834';
export function Component26834({ value = 26834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26834, 'data-value': derived.doubled }, children);
}
export default Component26834;
