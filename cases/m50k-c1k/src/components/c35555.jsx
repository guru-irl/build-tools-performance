import React from 'react';
const LABEL_35555 = 'component_35555';
export function Component35555({ value = 35555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35555, 'data-value': derived.doubled }, children);
}
export default Component35555;
