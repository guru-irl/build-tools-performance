import React from 'react';
const LABEL_37555 = 'component_37555';
export function Component37555({ value = 37555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37555, 'data-value': derived.doubled }, children);
}
export default Component37555;
