import React from 'react';
const LABEL_28974 = 'component_28974';
export function Component28974({ value = 28974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28974, 'data-value': derived.doubled }, children);
}
export default Component28974;
