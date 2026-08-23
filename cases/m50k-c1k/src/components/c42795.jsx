import React from 'react';
const LABEL_42795 = 'component_42795';
export function Component42795({ value = 42795, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42795, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42795, 'data-value': derived.doubled }, children);
}
export default Component42795;
