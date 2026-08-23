import React from 'react';
const LABEL_7392 = 'component_7392';
export function Component7392({ value = 7392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7392, 'data-value': derived.doubled }, children);
}
export default Component7392;
