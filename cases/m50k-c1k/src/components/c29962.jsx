import React from 'react';
const LABEL_29962 = 'component_29962';
export function Component29962({ value = 29962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29962, 'data-value': derived.doubled }, children);
}
export default Component29962;
