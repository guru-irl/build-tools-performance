import React from 'react';
const LABEL_28902 = 'component_28902';
export function Component28902({ value = 28902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28902, 'data-value': derived.doubled }, children);
}
export default Component28902;
