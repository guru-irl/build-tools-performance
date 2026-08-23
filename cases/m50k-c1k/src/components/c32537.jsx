import React from 'react';
const LABEL_32537 = 'component_32537';
export function Component32537({ value = 32537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32537, 'data-value': derived.doubled }, children);
}
export default Component32537;
