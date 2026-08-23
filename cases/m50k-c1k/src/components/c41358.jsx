import React from 'react';
const LABEL_41358 = 'component_41358';
export function Component41358({ value = 41358, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41358, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41358, 'data-value': derived.doubled }, children);
}
export default Component41358;
