import React from 'react';
const LABEL_33555 = 'component_33555';
export function Component33555({ value = 33555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33555, 'data-value': derived.doubled }, children);
}
export default Component33555;
