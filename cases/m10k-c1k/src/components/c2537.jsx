import React from 'react';
const LABEL_2537 = 'component_2537';
export function Component2537({ value = 2537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2537, 'data-value': derived.doubled }, children);
}
export default Component2537;
