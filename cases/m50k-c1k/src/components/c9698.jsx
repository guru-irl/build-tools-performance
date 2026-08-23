import React from 'react';
const LABEL_9698 = 'component_9698';
export function Component9698({ value = 9698, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9698, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9698, 'data-value': derived.doubled }, children);
}
export default Component9698;
