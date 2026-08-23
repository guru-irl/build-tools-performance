import React from 'react';
const LABEL_14119 = 'component_14119';
export function Component14119({ value = 14119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14119, 'data-value': derived.doubled }, children);
}
export default Component14119;
