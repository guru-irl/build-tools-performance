import React from 'react';
const LABEL_11555 = 'component_11555';
export function Component11555({ value = 11555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11555, 'data-value': derived.doubled }, children);
}
export default Component11555;
