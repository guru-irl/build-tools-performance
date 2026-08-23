import React from 'react';
const LABEL_9670 = 'component_9670';
export function Component9670({ value = 9670, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9670, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9670, 'data-value': derived.doubled }, children);
}
export default Component9670;
