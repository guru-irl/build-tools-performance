import React from 'react';
const LABEL_28651 = 'component_28651';
export function Component28651({ value = 28651, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28651, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28651, 'data-value': derived.doubled }, children);
}
export default Component28651;
