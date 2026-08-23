import React from 'react';
const LABEL_37300 = 'component_37300';
export function Component37300({ value = 37300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37300, 'data-value': derived.doubled }, children);
}
export default Component37300;
