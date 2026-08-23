import React from 'react';
const LABEL_41555 = 'component_41555';
export function Component41555({ value = 41555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41555, 'data-value': derived.doubled }, children);
}
export default Component41555;
