import React from 'react';
const LABEL_44119 = 'component_44119';
export function Component44119({ value = 44119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44119, 'data-value': derived.doubled }, children);
}
export default Component44119;
