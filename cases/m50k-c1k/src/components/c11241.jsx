import React from 'react';
const LABEL_11241 = 'component_11241';
export function Component11241({ value = 11241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11241, 'data-value': derived.doubled }, children);
}
export default Component11241;
