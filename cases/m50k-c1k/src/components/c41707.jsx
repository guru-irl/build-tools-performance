import React from 'react';
const LABEL_41707 = 'component_41707';
export function Component41707({ value = 41707, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41707, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41707, 'data-value': derived.doubled }, children);
}
export default Component41707;
