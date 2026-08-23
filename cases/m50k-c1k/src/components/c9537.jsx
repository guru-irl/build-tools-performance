import React from 'react';
const LABEL_9537 = 'component_9537';
export function Component9537({ value = 9537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9537, 'data-value': derived.doubled }, children);
}
export default Component9537;
