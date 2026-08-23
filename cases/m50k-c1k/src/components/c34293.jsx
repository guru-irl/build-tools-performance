import React from 'react';
const LABEL_34293 = 'component_34293';
export function Component34293({ value = 34293, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34293, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34293, 'data-value': derived.doubled }, children);
}
export default Component34293;
