import React from 'react';
const LABEL_19773 = 'component_19773';
export function Component19773({ value = 19773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19773, 'data-value': derived.doubled }, children);
}
export default Component19773;
