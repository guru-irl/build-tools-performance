import React from 'react';
const LABEL_44421 = 'component_44421';
export function Component44421({ value = 44421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44421, 'data-value': derived.doubled }, children);
}
export default Component44421;
