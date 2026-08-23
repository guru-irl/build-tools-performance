import React from 'react';
const LABEL_22119 = 'component_22119';
export function Component22119({ value = 22119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22119, 'data-value': derived.doubled }, children);
}
export default Component22119;
