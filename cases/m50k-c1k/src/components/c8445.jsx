import React from 'react';
const LABEL_8445 = 'component_8445';
export function Component8445({ value = 8445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8445, 'data-value': derived.doubled }, children);
}
export default Component8445;
