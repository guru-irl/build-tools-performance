import React from 'react';
const LABEL_19140 = 'component_19140';
export function Component19140({ value = 19140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19140, 'data-value': derived.doubled }, children);
}
export default Component19140;
