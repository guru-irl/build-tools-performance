import React from 'react';
const LABEL_22773 = 'component_22773';
export function Component22773({ value = 22773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22773, 'data-value': derived.doubled }, children);
}
export default Component22773;
