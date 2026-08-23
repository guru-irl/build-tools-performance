import React from 'react';
const LABEL_42596 = 'component_42596';
export function Component42596({ value = 42596, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42596, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42596, 'data-value': derived.doubled }, children);
}
export default Component42596;
