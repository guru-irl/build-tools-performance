import React from 'react';
const LABEL_8119 = 'component_8119';
export function Component8119({ value = 8119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8119, 'data-value': derived.doubled }, children);
}
export default Component8119;
