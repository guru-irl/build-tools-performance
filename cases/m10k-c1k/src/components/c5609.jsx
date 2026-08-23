import React from 'react';
const LABEL_5609 = 'component_5609';
export function Component5609({ value = 5609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5609, 'data-value': derived.doubled }, children);
}
export default Component5609;
