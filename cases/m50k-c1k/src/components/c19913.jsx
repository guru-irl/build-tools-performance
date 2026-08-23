import React from 'react';
const LABEL_19913 = 'component_19913';
export function Component19913({ value = 19913, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19913, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19913, 'data-value': derived.doubled }, children);
}
export default Component19913;
