import React from 'react';
const LABEL_34626 = 'component_34626';
export function Component34626({ value = 34626, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34626, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34626, 'data-value': derived.doubled }, children);
}
export default Component34626;
