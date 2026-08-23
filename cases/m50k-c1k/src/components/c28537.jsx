import React from 'react';
const LABEL_28537 = 'component_28537';
export function Component28537({ value = 28537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28537, 'data-value': derived.doubled }, children);
}
export default Component28537;
