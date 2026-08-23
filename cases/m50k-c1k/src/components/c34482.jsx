import React from 'react';
const LABEL_34482 = 'component_34482';
export function Component34482({ value = 34482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34482, 'data-value': derived.doubled }, children);
}
export default Component34482;
