import React from 'react';
const LABEL_28937 = 'component_28937';
export function Component28937({ value = 28937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28937, 'data-value': derived.doubled }, children);
}
export default Component28937;
