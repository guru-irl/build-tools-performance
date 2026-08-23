import React from 'react';
const LABEL_8555 = 'component_8555';
export function Component8555({ value = 8555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8555, 'data-value': derived.doubled }, children);
}
export default Component8555;
