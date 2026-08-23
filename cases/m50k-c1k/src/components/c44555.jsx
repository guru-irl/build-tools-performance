import React from 'react';
const LABEL_44555 = 'component_44555';
export function Component44555({ value = 44555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44555, 'data-value': derived.doubled }, children);
}
export default Component44555;
