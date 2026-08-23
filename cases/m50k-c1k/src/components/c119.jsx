import React from 'react';
const LABEL_119 = 'component_119';
export function Component119({ value = 119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_119, 'data-value': derived.doubled }, children);
}
export default Component119;
