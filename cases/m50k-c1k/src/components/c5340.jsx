import React from 'react';
const LABEL_5340 = 'component_5340';
export function Component5340({ value = 5340, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5340, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5340, 'data-value': derived.doubled }, children);
}
export default Component5340;
