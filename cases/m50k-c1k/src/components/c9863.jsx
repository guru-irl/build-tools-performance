import React from 'react';
const LABEL_9863 = 'component_9863';
export function Component9863({ value = 9863, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9863, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9863, 'data-value': derived.doubled }, children);
}
export default Component9863;
