import React from 'react';
const LABEL_41740 = 'component_41740';
export function Component41740({ value = 41740, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41740, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41740, 'data-value': derived.doubled }, children);
}
export default Component41740;
