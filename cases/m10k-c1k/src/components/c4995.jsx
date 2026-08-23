import React from 'react';
const LABEL_4995 = 'component_4995';
export function Component4995({ value = 4995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4995, 'data-value': derived.doubled }, children);
}
export default Component4995;
