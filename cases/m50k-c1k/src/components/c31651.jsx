import React from 'react';
const LABEL_31651 = 'component_31651';
export function Component31651({ value = 31651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31651, 'data-value': derived.doubled }, children);
}
export default Component31651;
