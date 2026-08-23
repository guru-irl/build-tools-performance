import React from 'react';
const LABEL_28591 = 'component_28591';
export function Component28591({ value = 28591, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28591, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28591, 'data-value': derived.doubled }, children);
}
export default Component28591;
