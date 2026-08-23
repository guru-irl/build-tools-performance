import React from 'react';
const LABEL_19382 = 'component_19382';
export function Component19382({ value = 19382, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19382, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19382, 'data-value': derived.doubled }, children);
}
export default Component19382;
