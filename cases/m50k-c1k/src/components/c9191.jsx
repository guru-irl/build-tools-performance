import React from 'react';
const LABEL_9191 = 'component_9191';
export function Component9191({ value = 9191, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9191, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9191, 'data-value': derived.doubled }, children);
}
export default Component9191;
