import React from 'react';
const LABEL_18974 = 'component_18974';
export function Component18974({ value = 18974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18974, 'data-value': derived.doubled }, children);
}
export default Component18974;
