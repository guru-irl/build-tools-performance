import React from 'react';
const LABEL_23139 = 'component_23139';
export function Component23139({ value = 23139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23139, 'data-value': derived.doubled }, children);
}
export default Component23139;
