import React from 'react';
const LABEL_807 = 'component_807';
export function Component807({ value = 807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_807, 'data-value': derived.doubled }, children);
}
export default Component807;
