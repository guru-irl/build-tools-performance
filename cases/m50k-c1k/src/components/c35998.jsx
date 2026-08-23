import React from 'react';
const LABEL_35998 = 'component_35998';
export function Component35998({ value = 35998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35998, 'data-value': derived.doubled }, children);
}
export default Component35998;
