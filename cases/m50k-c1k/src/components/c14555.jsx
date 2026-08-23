import React from 'react';
const LABEL_14555 = 'component_14555';
export function Component14555({ value = 14555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14555, 'data-value': derived.doubled }, children);
}
export default Component14555;
