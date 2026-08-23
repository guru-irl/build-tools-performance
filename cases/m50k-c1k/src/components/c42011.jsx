import React from 'react';
const LABEL_42011 = 'component_42011';
export function Component42011({ value = 42011, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42011, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42011, 'data-value': derived.doubled }, children);
}
export default Component42011;
