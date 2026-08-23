import React from 'react';
const LABEL_11445 = 'component_11445';
export function Component11445({ value = 11445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11445, 'data-value': derived.doubled }, children);
}
export default Component11445;
