import React from 'react';
const LABEL_29555 = 'component_29555';
export function Component29555({ value = 29555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29555, 'data-value': derived.doubled }, children);
}
export default Component29555;
