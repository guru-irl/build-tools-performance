import React from 'react';
const LABEL_11773 = 'component_11773';
export function Component11773({ value = 11773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11773, 'data-value': derived.doubled }, children);
}
export default Component11773;
