import React from 'react';
const LABEL_15741 = 'component_15741';
export function Component15741({ value = 15741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15741, 'data-value': derived.doubled }, children);
}
export default Component15741;
