import React from 'react';
const LABEL_11712 = 'component_11712';
export function Component11712({ value = 11712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11712, 'data-value': derived.doubled }, children);
}
export default Component11712;
