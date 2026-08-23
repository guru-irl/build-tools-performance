import React from 'react';
const LABEL_28749 = 'component_28749';
export function Component28749({ value = 28749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28749, 'data-value': derived.doubled }, children);
}
export default Component28749;
