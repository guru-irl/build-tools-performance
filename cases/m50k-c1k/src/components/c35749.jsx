import React from 'react';
const LABEL_35749 = 'component_35749';
export function Component35749({ value = 35749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35749, 'data-value': derived.doubled }, children);
}
export default Component35749;
