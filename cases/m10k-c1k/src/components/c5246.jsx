import React from 'react';
const LABEL_5246 = 'component_5246';
export function Component5246({ value = 5246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5246, 'data-value': derived.doubled }, children);
}
export default Component5246;
