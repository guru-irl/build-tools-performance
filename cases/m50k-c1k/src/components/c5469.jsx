import React from 'react';
const LABEL_5469 = 'component_5469';
export function Component5469({ value = 5469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5469, 'data-value': derived.doubled }, children);
}
export default Component5469;
