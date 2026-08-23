import React from 'react';
const LABEL_44342 = 'component_44342';
export function Component44342({ value = 44342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44342, 'data-value': derived.doubled }, children);
}
export default Component44342;
