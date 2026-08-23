import React from 'react';
const LABEL_46555 = 'component_46555';
export function Component46555({ value = 46555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46555, 'data-value': derived.doubled }, children);
}
export default Component46555;
