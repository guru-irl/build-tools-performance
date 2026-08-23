import React from 'react';
const LABEL_42209 = 'component_42209';
export function Component42209({ value = 42209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42209, 'data-value': derived.doubled }, children);
}
export default Component42209;
