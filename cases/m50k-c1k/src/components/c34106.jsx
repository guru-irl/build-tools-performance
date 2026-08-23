import React from 'react';
const LABEL_34106 = 'component_34106';
export function Component34106({ value = 34106, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34106, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34106, 'data-value': derived.doubled }, children);
}
export default Component34106;
