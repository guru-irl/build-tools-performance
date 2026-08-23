import React from 'react';
const LABEL_29358 = 'component_29358';
export function Component29358({ value = 29358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29358, 'data-value': derived.doubled }, children);
}
export default Component29358;
