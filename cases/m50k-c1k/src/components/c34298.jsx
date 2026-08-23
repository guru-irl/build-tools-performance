import React from 'react';
const LABEL_34298 = 'component_34298';
export function Component34298({ value = 34298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34298, 'data-value': derived.doubled }, children);
}
export default Component34298;
