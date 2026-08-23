import React from 'react';
const LABEL_22555 = 'component_22555';
export function Component22555({ value = 22555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22555, 'data-value': derived.doubled }, children);
}
export default Component22555;
