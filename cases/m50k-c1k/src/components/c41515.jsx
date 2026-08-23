import React from 'react';
const LABEL_41515 = 'component_41515';
export function Component41515({ value = 41515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41515, 'data-value': derived.doubled }, children);
}
export default Component41515;
