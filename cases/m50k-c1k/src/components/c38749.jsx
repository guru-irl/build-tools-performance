import React from 'react';
const LABEL_38749 = 'component_38749';
export function Component38749({ value = 38749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38749, 'data-value': derived.doubled }, children);
}
export default Component38749;
