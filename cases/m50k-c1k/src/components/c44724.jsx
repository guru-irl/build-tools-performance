import React from 'react';
const LABEL_44724 = 'component_44724';
export function Component44724({ value = 44724, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44724, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44724, 'data-value': derived.doubled }, children);
}
export default Component44724;
