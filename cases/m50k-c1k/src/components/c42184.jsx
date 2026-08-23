import React from 'react';
const LABEL_42184 = 'component_42184';
export function Component42184({ value = 42184, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42184, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42184, 'data-value': derived.doubled }, children);
}
export default Component42184;
