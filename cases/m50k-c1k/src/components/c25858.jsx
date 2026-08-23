import React from 'react';
const LABEL_25858 = 'component_25858';
export function Component25858({ value = 25858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25858, 'data-value': derived.doubled }, children);
}
export default Component25858;
