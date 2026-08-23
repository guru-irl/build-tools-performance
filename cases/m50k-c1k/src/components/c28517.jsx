import React from 'react';
const LABEL_28517 = 'component_28517';
export function Component28517({ value = 28517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28517, 'data-value': derived.doubled }, children);
}
export default Component28517;
