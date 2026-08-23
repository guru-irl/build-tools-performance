import React from 'react';
const LABEL_41664 = 'component_41664';
export function Component41664({ value = 41664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41664, 'data-value': derived.doubled }, children);
}
export default Component41664;
