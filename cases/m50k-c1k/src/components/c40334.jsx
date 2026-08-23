import React from 'react';
const LABEL_40334 = 'component_40334';
export function Component40334({ value = 40334, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40334, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40334, 'data-value': derived.doubled }, children);
}
export default Component40334;
