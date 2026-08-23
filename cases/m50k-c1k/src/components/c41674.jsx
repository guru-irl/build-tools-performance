import React from 'react';
const LABEL_41674 = 'component_41674';
export function Component41674({ value = 41674, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41674, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41674, 'data-value': derived.doubled }, children);
}
export default Component41674;
