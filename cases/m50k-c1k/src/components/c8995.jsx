import React from 'react';
const LABEL_8995 = 'component_8995';
export function Component8995({ value = 8995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8995, 'data-value': derived.doubled }, children);
}
export default Component8995;
