import React from 'react';
const LABEL_10203 = 'component_10203';
export function Component10203({ value = 10203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10203, 'data-value': derived.doubled }, children);
}
export default Component10203;
