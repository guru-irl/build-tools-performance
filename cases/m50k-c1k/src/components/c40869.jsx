import React from 'react';
const LABEL_40869 = 'component_40869';
export function Component40869({ value = 40869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40869, 'data-value': derived.doubled }, children);
}
export default Component40869;
