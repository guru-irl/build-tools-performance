import React from 'react';
const LABEL_28838 = 'component_28838';
export function Component28838({ value = 28838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28838, 'data-value': derived.doubled }, children);
}
export default Component28838;
