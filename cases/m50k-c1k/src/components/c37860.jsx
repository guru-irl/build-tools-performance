import React from 'react';
const LABEL_37860 = 'component_37860';
export function Component37860({ value = 37860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37860, 'data-value': derived.doubled }, children);
}
export default Component37860;
