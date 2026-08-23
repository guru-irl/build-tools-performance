import React from 'react';
const LABEL_8460 = 'component_8460';
export function Component8460({ value = 8460, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8460, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8460, 'data-value': derived.doubled }, children);
}
export default Component8460;
