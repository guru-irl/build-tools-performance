import React from 'react';
const LABEL_34059 = 'component_34059';
export function Component34059({ value = 34059, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34059, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34059, 'data-value': derived.doubled }, children);
}
export default Component34059;
