import React from 'react';
const LABEL_38176 = 'component_38176';
export function Component38176({ value = 38176, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38176, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38176, 'data-value': derived.doubled }, children);
}
export default Component38176;
