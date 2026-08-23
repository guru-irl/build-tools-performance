import React from 'react';
const LABEL_35982 = 'component_35982';
export function Component35982({ value = 35982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35982, 'data-value': derived.doubled }, children);
}
export default Component35982;
