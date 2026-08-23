import React from 'react';
const LABEL_22537 = 'component_22537';
export function Component22537({ value = 22537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22537, 'data-value': derived.doubled }, children);
}
export default Component22537;
