import React from 'react';
const LABEL_4974 = 'component_4974';
export function Component4974({ value = 4974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4974, 'data-value': derived.doubled }, children);
}
export default Component4974;
