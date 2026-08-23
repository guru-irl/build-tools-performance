import React from 'react';
const LABEL_5694 = 'component_5694';
export function Component5694({ value = 5694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5694, 'data-value': derived.doubled }, children);
}
export default Component5694;
