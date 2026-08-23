import React from 'react';
const LABEL_20384 = 'component_20384';
export function Component20384({ value = 20384, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20384, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20384, 'data-value': derived.doubled }, children);
}
export default Component20384;
