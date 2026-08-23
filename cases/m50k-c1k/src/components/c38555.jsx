import React from 'react';
const LABEL_38555 = 'component_38555';
export function Component38555({ value = 38555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38555, 'data-value': derived.doubled }, children);
}
export default Component38555;
