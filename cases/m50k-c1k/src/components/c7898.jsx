import React from 'react';
const LABEL_7898 = 'component_7898';
export function Component7898({ value = 7898, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7898, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7898, 'data-value': derived.doubled }, children);
}
export default Component7898;
