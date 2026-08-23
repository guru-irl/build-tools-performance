import React from 'react';
const LABEL_44449 = 'component_44449';
export function Component44449({ value = 44449, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44449, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44449, 'data-value': derived.doubled }, children);
}
export default Component44449;
