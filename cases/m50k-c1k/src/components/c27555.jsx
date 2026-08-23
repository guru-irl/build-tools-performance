import React from 'react';
const LABEL_27555 = 'component_27555';
export function Component27555({ value = 27555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27555, 'data-value': derived.doubled }, children);
}
export default Component27555;
