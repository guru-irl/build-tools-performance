import React from 'react';
const LABEL_34158 = 'component_34158';
export function Component34158({ value = 34158, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34158, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34158, 'data-value': derived.doubled }, children);
}
export default Component34158;
