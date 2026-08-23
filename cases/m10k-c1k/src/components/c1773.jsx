import React from 'react';
const LABEL_1773 = 'component_1773';
export function Component1773({ value = 1773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1773, 'data-value': derived.doubled }, children);
}
export default Component1773;
