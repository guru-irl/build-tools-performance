import React from 'react';
const LABEL_42951 = 'component_42951';
export function Component42951({ value = 42951, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42951, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42951, 'data-value': derived.doubled }, children);
}
export default Component42951;
