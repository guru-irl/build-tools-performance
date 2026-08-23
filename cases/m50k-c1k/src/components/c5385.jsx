import React from 'react';
const LABEL_5385 = 'component_5385';
export function Component5385({ value = 5385, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5385, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5385, 'data-value': derived.doubled }, children);
}
export default Component5385;
