import React from 'react';
const LABEL_3246 = 'component_3246';
export function Component3246({ value = 3246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3246, 'data-value': derived.doubled }, children);
}
export default Component3246;
