import React from 'react';
const LABEL_35117 = 'component_35117';
export function Component35117({ value = 35117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35117, 'data-value': derived.doubled }, children);
}
export default Component35117;
