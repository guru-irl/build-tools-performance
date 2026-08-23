import React from 'react';
const LABEL_11974 = 'component_11974';
export function Component11974({ value = 11974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11974, 'data-value': derived.doubled }, children);
}
export default Component11974;
