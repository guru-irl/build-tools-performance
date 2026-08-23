import React from 'react';
const LABEL_5579 = 'component_5579';
export function Component5579({ value = 5579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5579, 'data-value': derived.doubled }, children);
}
export default Component5579;
