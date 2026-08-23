import React from 'react';
const LABEL_11119 = 'component_11119';
export function Component11119({ value = 11119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11119, 'data-value': derived.doubled }, children);
}
export default Component11119;
