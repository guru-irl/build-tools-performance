import React from 'react';
const LABEL_6231 = 'component_6231';
export function Component6231({ value = 6231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6231, 'data-value': derived.doubled }, children);
}
export default Component6231;
