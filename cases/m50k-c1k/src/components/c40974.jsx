import React from 'react';
const LABEL_40974 = 'component_40974';
export function Component40974({ value = 40974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40974, 'data-value': derived.doubled }, children);
}
export default Component40974;
