import React from 'react';
const LABEL_10119 = 'component_10119';
export function Component10119({ value = 10119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10119, 'data-value': derived.doubled }, children);
}
export default Component10119;
