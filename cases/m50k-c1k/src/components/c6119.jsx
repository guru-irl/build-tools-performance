import React from 'react';
const LABEL_6119 = 'component_6119';
export function Component6119({ value = 6119, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6119, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6119, 'data-value': derived.doubled }, children);
}
export default Component6119;
