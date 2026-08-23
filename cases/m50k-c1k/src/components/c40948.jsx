import React from 'react';
const LABEL_40948 = 'component_40948';
export function Component40948({ value = 40948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40948, 'data-value': derived.doubled }, children);
}
export default Component40948;
