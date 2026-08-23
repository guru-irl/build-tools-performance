import React from 'react';
const LABEL_41743 = 'component_41743';
export function Component41743({ value = 41743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41743, 'data-value': derived.doubled }, children);
}
export default Component41743;
