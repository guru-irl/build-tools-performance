import React from 'react';
const LABEL_26948 = 'component_26948';
export function Component26948({ value = 26948, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26948, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26948, 'data-value': derived.doubled }, children);
}
export default Component26948;
