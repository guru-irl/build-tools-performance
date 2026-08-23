import React from 'react';
const LABEL_21555 = 'component_21555';
export function Component21555({ value = 21555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21555, 'data-value': derived.doubled }, children);
}
export default Component21555;
