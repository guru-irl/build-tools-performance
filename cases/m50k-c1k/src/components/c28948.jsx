import React from 'react';
const LABEL_28948 = 'component_28948';
export function Component28948({ value = 28948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28948, 'data-value': derived.doubled }, children);
}
export default Component28948;
