import React from 'react';
const LABEL_9119 = 'component_9119';
export function Component9119({ value = 9119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9119, 'data-value': derived.doubled }, children);
}
export default Component9119;
