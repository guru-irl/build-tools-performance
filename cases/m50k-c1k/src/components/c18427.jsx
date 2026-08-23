import React from 'react';
const LABEL_18427 = 'component_18427';
export function Component18427({ value = 18427, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18427, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18427, 'data-value': derived.doubled }, children);
}
export default Component18427;
