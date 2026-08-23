import React from 'react';
const LABEL_25555 = 'component_25555';
export function Component25555({ value = 25555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25555, 'data-value': derived.doubled }, children);
}
export default Component25555;
