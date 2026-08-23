import React from 'react';
const LABEL_8258 = 'component_8258';
export function Component8258({ value = 8258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8258, 'data-value': derived.doubled }, children);
}
export default Component8258;
