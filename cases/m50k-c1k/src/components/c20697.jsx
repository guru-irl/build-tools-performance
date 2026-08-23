import React from 'react';
const LABEL_20697 = 'component_20697';
export function Component20697({ value = 20697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20697, 'data-value': derived.doubled }, children);
}
export default Component20697;
