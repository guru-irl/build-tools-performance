import React from 'react';
const LABEL_12555 = 'component_12555';
export function Component12555({ value = 12555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12555, 'data-value': derived.doubled }, children);
}
export default Component12555;
