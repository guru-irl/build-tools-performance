import React from 'react';
const LABEL_14741 = 'component_14741';
export function Component14741({ value = 14741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14741, 'data-value': derived.doubled }, children);
}
export default Component14741;
