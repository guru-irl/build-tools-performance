import React from 'react';
const LABEL_18549 = 'component_18549';
export function Component18549({ value = 18549, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18549, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18549, 'data-value': derived.doubled }, children);
}
export default Component18549;
