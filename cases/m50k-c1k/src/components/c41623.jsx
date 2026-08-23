import React from 'react';
const LABEL_41623 = 'component_41623';
export function Component41623({ value = 41623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41623, 'data-value': derived.doubled }, children);
}
export default Component41623;
