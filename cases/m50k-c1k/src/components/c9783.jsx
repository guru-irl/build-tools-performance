import React from 'react';
const LABEL_9783 = 'component_9783';
export function Component9783({ value = 9783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9783, 'data-value': derived.doubled }, children);
}
export default Component9783;
