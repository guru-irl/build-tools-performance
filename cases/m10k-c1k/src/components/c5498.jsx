import React from 'react';
const LABEL_5498 = 'component_5498';
export function Component5498({ value = 5498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5498, 'data-value': derived.doubled }, children);
}
export default Component5498;
