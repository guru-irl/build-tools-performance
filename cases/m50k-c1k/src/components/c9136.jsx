import React from 'react';
const LABEL_9136 = 'component_9136';
export function Component9136({ value = 9136, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9136, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9136, 'data-value': derived.doubled }, children);
}
export default Component9136;
