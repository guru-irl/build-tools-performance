import React from 'react';
const LABEL_3741 = 'component_3741';
export function Component3741({ value = 3741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3741, 'data-value': derived.doubled }, children);
}
export default Component3741;
