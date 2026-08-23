import React from 'react';
const LABEL_26807 = 'component_26807';
export function Component26807({ value = 26807, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26807, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26807, 'data-value': derived.doubled }, children);
}
export default Component26807;
