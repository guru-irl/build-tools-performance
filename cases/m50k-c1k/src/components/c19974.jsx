import React from 'react';
const LABEL_19974 = 'component_19974';
export function Component19974({ value = 19974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19974, 'data-value': derived.doubled }, children);
}
export default Component19974;
