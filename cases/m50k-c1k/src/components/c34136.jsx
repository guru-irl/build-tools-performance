import React from 'react';
const LABEL_34136 = 'component_34136';
export function Component34136({ value = 34136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34136, 'data-value': derived.doubled }, children);
}
export default Component34136;
