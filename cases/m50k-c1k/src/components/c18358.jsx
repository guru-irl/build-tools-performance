import React from 'react';
const LABEL_18358 = 'component_18358';
export function Component18358({ value = 18358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18358, 'data-value': derived.doubled }, children);
}
export default Component18358;
