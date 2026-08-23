import React from 'react';
const LABEL_34362 = 'component_34362';
export function Component34362({ value = 34362, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34362, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34362, 'data-value': derived.doubled }, children);
}
export default Component34362;
