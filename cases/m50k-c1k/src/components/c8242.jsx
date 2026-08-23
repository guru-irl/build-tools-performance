import React from 'react';
const LABEL_8242 = 'component_8242';
export function Component8242({ value = 8242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8242, 'data-value': derived.doubled }, children);
}
export default Component8242;
