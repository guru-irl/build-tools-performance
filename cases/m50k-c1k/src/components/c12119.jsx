import React from 'react';
const LABEL_12119 = 'component_12119';
export function Component12119({ value = 12119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12119, 'data-value': derived.doubled }, children);
}
export default Component12119;
