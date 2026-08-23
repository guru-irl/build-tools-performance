import React from 'react';
const LABEL_42773 = 'component_42773';
export function Component42773({ value = 42773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42773, 'data-value': derived.doubled }, children);
}
export default Component42773;
