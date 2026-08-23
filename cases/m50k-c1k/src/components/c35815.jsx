import React from 'react';
const LABEL_35815 = 'component_35815';
export function Component35815({ value = 35815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35815, 'data-value': derived.doubled }, children);
}
export default Component35815;
