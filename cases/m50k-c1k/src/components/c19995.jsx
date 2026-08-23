import React from 'react';
const LABEL_19995 = 'component_19995';
export function Component19995({ value = 19995, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19995, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19995, 'data-value': derived.doubled }, children);
}
export default Component19995;
