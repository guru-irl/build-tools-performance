import React from 'react';
const LABEL_5392 = 'component_5392';
export function Component5392({ value = 5392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5392, 'data-value': derived.doubled }, children);
}
export default Component5392;
