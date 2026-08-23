import React from 'react';
const LABEL_28555 = 'component_28555';
export function Component28555({ value = 28555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28555, 'data-value': derived.doubled }, children);
}
export default Component28555;
