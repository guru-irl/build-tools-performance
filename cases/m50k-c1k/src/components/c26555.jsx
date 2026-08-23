import React from 'react';
const LABEL_26555 = 'component_26555';
export function Component26555({ value = 26555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26555, 'data-value': derived.doubled }, children);
}
export default Component26555;
