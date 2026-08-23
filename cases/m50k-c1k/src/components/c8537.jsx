import React from 'react';
const LABEL_8537 = 'component_8537';
export function Component8537({ value = 8537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8537, 'data-value': derived.doubled }, children);
}
export default Component8537;
