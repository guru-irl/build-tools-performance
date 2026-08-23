import React from 'react';
const LABEL_7098 = 'component_7098';
export function Component7098({ value = 7098, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7098, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7098, 'data-value': derived.doubled }, children);
}
export default Component7098;
