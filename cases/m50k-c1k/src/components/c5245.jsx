import React from 'react';
const LABEL_5245 = 'component_5245';
export function Component5245({ value = 5245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5245, 'data-value': derived.doubled }, children);
}
export default Component5245;
