import React from 'react';
const LABEL_46119 = 'component_46119';
export function Component46119({ value = 46119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46119, 'data-value': derived.doubled }, children);
}
export default Component46119;
