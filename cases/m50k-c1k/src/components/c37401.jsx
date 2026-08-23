import React from 'react';
const LABEL_37401 = 'component_37401';
export function Component37401({ value = 37401, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37401, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37401, 'data-value': derived.doubled }, children);
}
export default Component37401;
