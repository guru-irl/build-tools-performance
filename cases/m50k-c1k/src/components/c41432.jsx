import React from 'react';
const LABEL_41432 = 'component_41432';
export function Component41432({ value = 41432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41432, 'data-value': derived.doubled }, children);
}
export default Component41432;
