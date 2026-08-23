import React from 'react';
const LABEL_9205 = 'component_9205';
export function Component9205({ value = 9205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9205, 'data-value': derived.doubled }, children);
}
export default Component9205;
