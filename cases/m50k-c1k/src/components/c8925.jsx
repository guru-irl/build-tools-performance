import React from 'react';
const LABEL_8925 = 'component_8925';
export function Component8925({ value = 8925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8925, 'data-value': derived.doubled }, children);
}
export default Component8925;
