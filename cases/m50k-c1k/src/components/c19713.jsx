import React from 'react';
const LABEL_19713 = 'component_19713';
export function Component19713({ value = 19713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19713, 'data-value': derived.doubled }, children);
}
export default Component19713;
