import React from 'react';
const LABEL_13666 = 'component_13666';
export function Component13666({ value = 13666, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13666, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13666, 'data-value': derived.doubled }, children);
}
export default Component13666;
