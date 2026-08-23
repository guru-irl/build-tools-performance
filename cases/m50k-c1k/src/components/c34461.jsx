import React from 'react';
const LABEL_34461 = 'component_34461';
export function Component34461({ value = 34461, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34461, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34461, 'data-value': derived.doubled }, children);
}
export default Component34461;
