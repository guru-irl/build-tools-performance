import React from 'react';
const LABEL_23385 = 'component_23385';
export function Component23385({ value = 23385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23385, 'data-value': derived.doubled }, children);
}
export default Component23385;
