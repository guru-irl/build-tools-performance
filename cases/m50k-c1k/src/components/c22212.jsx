import React from 'react';
const LABEL_22212 = 'component_22212';
export function Component22212({ value = 22212, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22212, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22212, 'data-value': derived.doubled }, children);
}
export default Component22212;
