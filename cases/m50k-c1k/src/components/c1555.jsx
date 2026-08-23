import React from 'react';
const LABEL_1555 = 'component_1555';
export function Component1555({ value = 1555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1555, 'data-value': derived.doubled }, children);
}
export default Component1555;
