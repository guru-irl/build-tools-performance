import React from 'react';
const LABEL_5974 = 'component_5974';
export function Component5974({ value = 5974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5974, 'data-value': derived.doubled }, children);
}
export default Component5974;
