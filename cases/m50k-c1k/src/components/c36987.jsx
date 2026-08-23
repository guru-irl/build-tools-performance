import React from 'react';
const LABEL_36987 = 'component_36987';
export function Component36987({ value = 36987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36987, 'data-value': derived.doubled }, children);
}
export default Component36987;
