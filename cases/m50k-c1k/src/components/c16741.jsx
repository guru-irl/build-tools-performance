import React from 'react';
const LABEL_16741 = 'component_16741';
export function Component16741({ value = 16741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16741, 'data-value': derived.doubled }, children);
}
export default Component16741;
