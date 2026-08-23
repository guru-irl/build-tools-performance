import React from 'react';
const LABEL_42555 = 'component_42555';
export function Component42555({ value = 42555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42555, 'data-value': derived.doubled }, children);
}
export default Component42555;
