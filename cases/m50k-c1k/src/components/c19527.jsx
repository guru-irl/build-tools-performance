import React from 'react';
const LABEL_19527 = 'component_19527';
export function Component19527({ value = 19527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19527, 'data-value': derived.doubled }, children);
}
export default Component19527;
