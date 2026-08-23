import React from 'react';
const LABEL_5555 = 'component_5555';
export function Component5555({ value = 5555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5555, 'data-value': derived.doubled }, children);
}
export default Component5555;
