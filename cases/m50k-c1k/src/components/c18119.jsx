import React from 'react';
const LABEL_18119 = 'component_18119';
export function Component18119({ value = 18119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18119, 'data-value': derived.doubled }, children);
}
export default Component18119;
