import React from 'react';
const LABEL_5181 = 'component_5181';
export function Component5181({ value = 5181, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5181, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5181, 'data-value': derived.doubled }, children);
}
export default Component5181;
