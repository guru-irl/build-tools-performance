import React from 'react';
const LABEL_41901 = 'component_41901';
export function Component41901({ value = 41901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41901, 'data-value': derived.doubled }, children);
}
export default Component41901;
