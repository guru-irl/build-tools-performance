import React from 'react';
const LABEL_7632 = 'component_7632';
export function Component7632({ value = 7632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7632, 'data-value': derived.doubled }, children);
}
export default Component7632;
