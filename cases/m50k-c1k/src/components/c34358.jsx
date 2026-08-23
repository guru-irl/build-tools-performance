import React from 'react';
const LABEL_34358 = 'component_34358';
export function Component34358({ value = 34358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34358, 'data-value': derived.doubled }, children);
}
export default Component34358;
