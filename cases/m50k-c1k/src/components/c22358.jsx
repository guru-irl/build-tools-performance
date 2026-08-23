import React from 'react';
const LABEL_22358 = 'component_22358';
export function Component22358({ value = 22358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22358, 'data-value': derived.doubled }, children);
}
export default Component22358;
