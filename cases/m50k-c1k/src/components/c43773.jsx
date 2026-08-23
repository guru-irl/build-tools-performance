import React from 'react';
const LABEL_43773 = 'component_43773';
export function Component43773({ value = 43773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43773, 'data-value': derived.doubled }, children);
}
export default Component43773;
