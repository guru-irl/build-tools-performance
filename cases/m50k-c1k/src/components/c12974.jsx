import React from 'react';
const LABEL_12974 = 'component_12974';
export function Component12974({ value = 12974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12974, 'data-value': derived.doubled }, children);
}
export default Component12974;
