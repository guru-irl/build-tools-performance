import React from 'react';
const LABEL_1119 = 'component_1119';
export function Component1119({ value = 1119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1119, 'data-value': derived.doubled }, children);
}
export default Component1119;
