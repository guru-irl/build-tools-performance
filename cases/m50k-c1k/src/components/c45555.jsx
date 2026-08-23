import React from 'react';
const LABEL_45555 = 'component_45555';
export function Component45555({ value = 45555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45555, 'data-value': derived.doubled }, children);
}
export default Component45555;
