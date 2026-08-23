import React from 'react';
const LABEL_35119 = 'component_35119';
export function Component35119({ value = 35119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35119, 'data-value': derived.doubled }, children);
}
export default Component35119;
