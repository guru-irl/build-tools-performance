import React from 'react';
const LABEL_15555 = 'component_15555';
export function Component15555({ value = 15555, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15555, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15555, 'data-value': derived.doubled }, children);
}
export default Component15555;
