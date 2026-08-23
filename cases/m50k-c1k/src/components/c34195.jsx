import React from 'react';
const LABEL_34195 = 'component_34195';
export function Component34195({ value = 34195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34195, 'data-value': derived.doubled }, children);
}
export default Component34195;
