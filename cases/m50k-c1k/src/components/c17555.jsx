import React from 'react';
const LABEL_17555 = 'component_17555';
export function Component17555({ value = 17555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17555, 'data-value': derived.doubled }, children);
}
export default Component17555;
