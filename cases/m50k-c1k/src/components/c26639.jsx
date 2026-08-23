import React from 'react';
const LABEL_26639 = 'component_26639';
export function Component26639({ value = 26639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26639, 'data-value': derived.doubled }, children);
}
export default Component26639;
