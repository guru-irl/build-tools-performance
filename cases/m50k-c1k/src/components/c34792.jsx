import React from 'react';
const LABEL_34792 = 'component_34792';
export function Component34792({ value = 34792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34792, 'data-value': derived.doubled }, children);
}
export default Component34792;
