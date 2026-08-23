import React from 'react';
const LABEL_21364 = 'component_21364';
export function Component21364({ value = 21364, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21364, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21364, 'data-value': derived.doubled }, children);
}
export default Component21364;
