import React from 'react';
const LABEL_34838 = 'component_34838';
export function Component34838({ value = 34838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34838, 'data-value': derived.doubled }, children);
}
export default Component34838;
