import React from 'react';
const LABEL_9363 = 'component_9363';
export function Component9363({ value = 9363, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9363, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9363, 'data-value': derived.doubled }, children);
}
export default Component9363;
