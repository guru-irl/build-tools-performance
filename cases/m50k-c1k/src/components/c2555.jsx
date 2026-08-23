import React from 'react';
const LABEL_2555 = 'component_2555';
export function Component2555({ value = 2555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2555, 'data-value': derived.doubled }, children);
}
export default Component2555;
