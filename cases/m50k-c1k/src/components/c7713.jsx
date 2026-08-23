import React from 'react';
const LABEL_7713 = 'component_7713';
export function Component7713({ value = 7713, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7713, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7713, 'data-value': derived.doubled }, children);
}
export default Component7713;
