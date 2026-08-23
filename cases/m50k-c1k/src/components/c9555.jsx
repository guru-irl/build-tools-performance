import React from 'react';
const LABEL_9555 = 'component_9555';
export function Component9555({ value = 9555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9555, 'data-value': derived.doubled }, children);
}
export default Component9555;
