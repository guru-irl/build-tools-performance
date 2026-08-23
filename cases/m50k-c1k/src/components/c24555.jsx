import React from 'react';
const LABEL_24555 = 'component_24555';
export function Component24555({ value = 24555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24555, 'data-value': derived.doubled }, children);
}
export default Component24555;
