import React from 'react';
const LABEL_5229 = 'component_5229';
export function Component5229({ value = 5229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5229, 'data-value': derived.doubled }, children);
}
export default Component5229;
