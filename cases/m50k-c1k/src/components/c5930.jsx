import React from 'react';
const LABEL_5930 = 'component_5930';
export function Component5930({ value = 5930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5930, 'data-value': derived.doubled }, children);
}
export default Component5930;
