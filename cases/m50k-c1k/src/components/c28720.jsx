import React from 'react';
const LABEL_28720 = 'component_28720';
export function Component28720({ value = 28720, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28720, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28720, 'data-value': derived.doubled }, children);
}
export default Component28720;
