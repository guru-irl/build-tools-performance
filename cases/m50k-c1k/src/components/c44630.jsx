import React from 'react';
const LABEL_44630 = 'component_44630';
export function Component44630({ value = 44630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44630, 'data-value': derived.doubled }, children);
}
export default Component44630;
