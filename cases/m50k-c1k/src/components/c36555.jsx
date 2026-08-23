import React from 'react';
const LABEL_36555 = 'component_36555';
export function Component36555({ value = 36555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36555, 'data-value': derived.doubled }, children);
}
export default Component36555;
