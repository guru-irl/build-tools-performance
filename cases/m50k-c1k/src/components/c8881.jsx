import React from 'react';
const LABEL_8881 = 'component_8881';
export function Component8881({ value = 8881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8881, 'data-value': derived.doubled }, children);
}
export default Component8881;
