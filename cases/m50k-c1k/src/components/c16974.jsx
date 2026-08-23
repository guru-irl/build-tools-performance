import React from 'react';
const LABEL_16974 = 'component_16974';
export function Component16974({ value = 16974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16974, 'data-value': derived.doubled }, children);
}
export default Component16974;
