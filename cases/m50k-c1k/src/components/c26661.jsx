import React from 'react';
const LABEL_26661 = 'component_26661';
export function Component26661({ value = 26661, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26661, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26661, 'data-value': derived.doubled }, children);
}
export default Component26661;
