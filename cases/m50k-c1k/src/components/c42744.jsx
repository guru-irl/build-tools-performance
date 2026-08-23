import React from 'react';
const LABEL_42744 = 'component_42744';
export function Component42744({ value = 42744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42744, 'data-value': derived.doubled }, children);
}
export default Component42744;
