import React from 'react';
const LABEL_111 = 'component_111';
export function Component111({ value = 111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_111, 'data-value': derived.doubled }, children);
}
export default Component111;
