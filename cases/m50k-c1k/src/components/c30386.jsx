import React from 'react';
const LABEL_30386 = 'component_30386';
export function Component30386({ value = 30386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30386, 'data-value': derived.doubled }, children);
}
export default Component30386;
