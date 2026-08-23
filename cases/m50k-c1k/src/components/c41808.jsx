import React from 'react';
const LABEL_41808 = 'component_41808';
export function Component41808({ value = 41808, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41808, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41808, 'data-value': derived.doubled }, children);
}
export default Component41808;
