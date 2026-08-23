import React from 'react';
const LABEL_40807 = 'component_40807';
export function Component40807({ value = 40807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40807, 'data-value': derived.doubled }, children);
}
export default Component40807;
