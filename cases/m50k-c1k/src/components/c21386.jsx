import React from 'react';
const LABEL_21386 = 'component_21386';
export function Component21386({ value = 21386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21386, 'data-value': derived.doubled }, children);
}
export default Component21386;
