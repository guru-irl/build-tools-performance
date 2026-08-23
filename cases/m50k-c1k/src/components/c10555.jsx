import React from 'react';
const LABEL_10555 = 'component_10555';
export function Component10555({ value = 10555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10555, 'data-value': derived.doubled }, children);
}
export default Component10555;
