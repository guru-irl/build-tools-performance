import React from 'react';
const LABEL_16358 = 'component_16358';
export function Component16358({ value = 16358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16358, 'data-value': derived.doubled }, children);
}
export default Component16358;
