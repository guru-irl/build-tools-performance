import React from 'react';
const LABEL_40030 = 'component_40030';
export function Component40030({ value = 40030, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40030, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40030, 'data-value': derived.doubled }, children);
}
export default Component40030;
