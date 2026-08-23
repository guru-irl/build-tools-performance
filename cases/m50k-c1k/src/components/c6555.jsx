import React from 'react';
const LABEL_6555 = 'component_6555';
export function Component6555({ value = 6555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6555, 'data-value': derived.doubled }, children);
}
export default Component6555;
