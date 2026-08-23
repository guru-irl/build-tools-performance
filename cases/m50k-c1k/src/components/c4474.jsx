import React from 'react';
const LABEL_4474 = 'component_4474';
export function Component4474({ value = 4474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4474, 'data-value': derived.doubled }, children);
}
export default Component4474;
