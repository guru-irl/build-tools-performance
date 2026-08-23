import React from 'react';
const LABEL_7117 = 'component_7117';
export function Component7117({ value = 7117, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7117, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7117, 'data-value': derived.doubled }, children);
}
export default Component7117;
