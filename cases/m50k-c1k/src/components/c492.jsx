import React from 'react';
const LABEL_492 = 'component_492';
export function Component492({ value = 492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_492, 'data-value': derived.doubled }, children);
}
export default Component492;
