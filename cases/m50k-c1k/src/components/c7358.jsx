import React from 'react';
const LABEL_7358 = 'component_7358';
export function Component7358({ value = 7358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7358, 'data-value': derived.doubled }, children);
}
export default Component7358;
