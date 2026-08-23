import React from 'react';
const LABEL_28392 = 'component_28392';
export function Component28392({ value = 28392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28392, 'data-value': derived.doubled }, children);
}
export default Component28392;
