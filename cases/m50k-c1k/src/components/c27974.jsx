import React from 'react';
const LABEL_27974 = 'component_27974';
export function Component27974({ value = 27974, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27974, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27974, 'data-value': derived.doubled }, children);
}
export default Component27974;
