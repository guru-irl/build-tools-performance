import React from 'react';
const LABEL_38183 = 'component_38183';
export function Component38183({ value = 38183, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38183, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38183, 'data-value': derived.doubled }, children);
}
export default Component38183;
