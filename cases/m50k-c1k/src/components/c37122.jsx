import React from 'react';
const LABEL_37122 = 'component_37122';
export function Component37122({ value = 37122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37122, 'data-value': derived.doubled }, children);
}
export default Component37122;
