import React from 'react';
const LABEL_35522 = 'component_35522';
export function Component35522({ value = 35522, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35522, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35522, 'data-value': derived.doubled }, children);
}
export default Component35522;
