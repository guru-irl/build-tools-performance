import React from 'react';
const LABEL_34773 = 'component_34773';
export function Component34773({ value = 34773, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34773, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34773, 'data-value': derived.doubled }, children);
}
export default Component34773;
