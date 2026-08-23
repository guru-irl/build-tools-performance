import React from 'react';
const LABEL_13537 = 'component_13537';
export function Component13537({ value = 13537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13537, 'data-value': derived.doubled }, children);
}
export default Component13537;
