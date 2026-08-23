import React from 'react';
const LABEL_46666 = 'component_46666';
export function Component46666({ value = 46666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46666, 'data-value': derived.doubled }, children);
}
export default Component46666;
