import React from 'react';
const LABEL_44159 = 'component_44159';
export function Component44159({ value = 44159, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44159, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44159, 'data-value': derived.doubled }, children);
}
export default Component44159;
