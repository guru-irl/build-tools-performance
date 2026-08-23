import React from 'react';
const LABEL_23555 = 'component_23555';
export function Component23555({ value = 23555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23555, 'data-value': derived.doubled }, children);
}
export default Component23555;
