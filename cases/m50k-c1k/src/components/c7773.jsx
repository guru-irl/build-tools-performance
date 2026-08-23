import React from 'react';
const LABEL_7773 = 'component_7773';
export function Component7773({ value = 7773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7773, 'data-value': derived.doubled }, children);
}
export default Component7773;
