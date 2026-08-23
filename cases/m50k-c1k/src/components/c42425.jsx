import React from 'react';
const LABEL_42425 = 'component_42425';
export function Component42425({ value = 42425, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42425, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42425, 'data-value': derived.doubled }, children);
}
export default Component42425;
