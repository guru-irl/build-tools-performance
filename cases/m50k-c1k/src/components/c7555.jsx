import React from 'react';
const LABEL_7555 = 'component_7555';
export function Component7555({ value = 7555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7555, 'data-value': derived.doubled }, children);
}
export default Component7555;
