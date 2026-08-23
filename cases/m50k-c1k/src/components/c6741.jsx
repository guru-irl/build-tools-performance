import React from 'react';
const LABEL_6741 = 'component_6741';
export function Component6741({ value = 6741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6741, 'data-value': derived.doubled }, children);
}
export default Component6741;
