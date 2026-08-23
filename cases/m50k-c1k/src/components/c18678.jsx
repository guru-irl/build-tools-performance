import React from 'react';
const LABEL_18678 = 'component_18678';
export function Component18678({ value = 18678, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18678, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18678, 'data-value': derived.doubled }, children);
}
export default Component18678;
