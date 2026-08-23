import React from 'react';
const LABEL_42855 = 'component_42855';
export function Component42855({ value = 42855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42855, 'data-value': derived.doubled }, children);
}
export default Component42855;
