import React from 'react';
const LABEL_41040 = 'component_41040';
export function Component41040({ value = 41040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41040, 'data-value': derived.doubled }, children);
}
export default Component41040;
