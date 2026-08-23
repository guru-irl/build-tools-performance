import React from 'react';
const LABEL_42749 = 'component_42749';
export function Component42749({ value = 42749, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42749, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42749, 'data-value': derived.doubled }, children);
}
export default Component42749;
