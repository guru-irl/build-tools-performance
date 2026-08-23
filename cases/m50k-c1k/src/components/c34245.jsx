import React from 'react';
const LABEL_34245 = 'component_34245';
export function Component34245({ value = 34245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34245, 'data-value': derived.doubled }, children);
}
export default Component34245;
