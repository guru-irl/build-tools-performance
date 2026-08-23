import React from 'react';
const LABEL_4741 = 'component_4741';
export function Component4741({ value = 4741, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4741, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4741, 'data-value': derived.doubled }, children);
}
export default Component4741;
