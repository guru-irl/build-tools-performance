import React from 'react';
const LABEL_9220 = 'component_9220';
export function Component9220({ value = 9220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9220, 'data-value': derived.doubled }, children);
}
export default Component9220;
