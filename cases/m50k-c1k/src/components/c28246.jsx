import React from 'react';
const LABEL_28246 = 'component_28246';
export function Component28246({ value = 28246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28246, 'data-value': derived.doubled }, children);
}
export default Component28246;
