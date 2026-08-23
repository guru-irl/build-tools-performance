import React from 'react';
const LABEL_42808 = 'component_42808';
export function Component42808({ value = 42808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42808, 'data-value': derived.doubled }, children);
}
export default Component42808;
