import React from 'react';
const LABEL_34169 = 'component_34169';
export function Component34169({ value = 34169, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34169, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34169, 'data-value': derived.doubled }, children);
}
export default Component34169;
