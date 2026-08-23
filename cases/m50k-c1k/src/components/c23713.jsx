import React from 'react';
const LABEL_23713 = 'component_23713';
export function Component23713({ value = 23713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23713, 'data-value': derived.doubled }, children);
}
export default Component23713;
