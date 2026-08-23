import React from 'react';
const LABEL_26090 = 'component_26090';
export function Component26090({ value = 26090, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26090, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26090, 'data-value': derived.doubled }, children);
}
export default Component26090;
