import React from 'react';
const LABEL_40537 = 'component_40537';
export function Component40537({ value = 40537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40537, 'data-value': derived.doubled }, children);
}
export default Component40537;
