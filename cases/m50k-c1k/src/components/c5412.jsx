import React from 'react';
const LABEL_5412 = 'component_5412';
export function Component5412({ value = 5412, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5412, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5412, 'data-value': derived.doubled }, children);
}
export default Component5412;
