import React from 'react';
const LABEL_10773 = 'component_10773';
export function Component10773({ value = 10773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10773, 'data-value': derived.doubled }, children);
}
export default Component10773;
