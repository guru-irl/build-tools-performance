import React from 'react';
const LABEL_32514 = 'component_32514';
export function Component32514({ value = 32514, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32514, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32514, 'data-value': derived.doubled }, children);
}
export default Component32514;
