import React from 'react';
const LABEL_41208 = 'component_41208';
export function Component41208({ value = 41208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41208, 'data-value': derived.doubled }, children);
}
export default Component41208;
