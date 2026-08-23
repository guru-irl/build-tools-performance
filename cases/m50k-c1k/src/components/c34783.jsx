import React from 'react';
const LABEL_34783 = 'component_34783';
export function Component34783({ value = 34783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34783, 'data-value': derived.doubled }, children);
}
export default Component34783;
