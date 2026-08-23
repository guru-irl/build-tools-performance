import React from 'react';
const LABEL_5749 = 'component_5749';
export function Component5749({ value = 5749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5749, 'data-value': derived.doubled }, children);
}
export default Component5749;
