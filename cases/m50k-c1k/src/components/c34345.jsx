import React from 'react';
const LABEL_34345 = 'component_34345';
export function Component34345({ value = 34345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34345, 'data-value': derived.doubled }, children);
}
export default Component34345;
