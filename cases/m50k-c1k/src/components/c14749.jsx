import React from 'react';
const LABEL_14749 = 'component_14749';
export function Component14749({ value = 14749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14749, 'data-value': derived.doubled }, children);
}
export default Component14749;
