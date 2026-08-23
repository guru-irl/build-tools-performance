import React from 'react';
const LABEL_39119 = 'component_39119';
export function Component39119({ value = 39119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39119, 'data-value': derived.doubled }, children);
}
export default Component39119;
