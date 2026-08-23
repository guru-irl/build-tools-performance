import React from 'react';
const LABEL_26697 = 'component_26697';
export function Component26697({ value = 26697, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26697, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26697, 'data-value': derived.doubled }, children);
}
export default Component26697;
