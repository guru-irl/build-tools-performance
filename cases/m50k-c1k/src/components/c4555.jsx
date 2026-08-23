import React from 'react';
const LABEL_4555 = 'component_4555';
export function Component4555({ value = 4555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4555, 'data-value': derived.doubled }, children);
}
export default Component4555;
