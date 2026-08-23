import React from 'react';
const LABEL_14537 = 'component_14537';
export function Component14537({ value = 14537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14537, 'data-value': derived.doubled }, children);
}
export default Component14537;
