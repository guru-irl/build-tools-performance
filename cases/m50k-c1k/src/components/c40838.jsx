import React from 'react';
const LABEL_40838 = 'component_40838';
export function Component40838({ value = 40838, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40838, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40838, 'data-value': derived.doubled }, children);
}
export default Component40838;
