import React from 'react';
const LABEL_34974 = 'component_34974';
export function Component34974({ value = 34974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34974, 'data-value': derived.doubled }, children);
}
export default Component34974;
