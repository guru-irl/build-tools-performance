import React from 'react';
const LABEL_41049 = 'component_41049';
export function Component41049({ value = 41049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41049, 'data-value': derived.doubled }, children);
}
export default Component41049;
