import React from 'react';
const LABEL_7119 = 'component_7119';
export function Component7119({ value = 7119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7119, 'data-value': derived.doubled }, children);
}
export default Component7119;
