import React from 'react';
const LABEL_42777 = 'component_42777';
export function Component42777({ value = 42777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42777, 'data-value': derived.doubled }, children);
}
export default Component42777;
