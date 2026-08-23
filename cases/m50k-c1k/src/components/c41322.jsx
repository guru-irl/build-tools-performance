import React from 'react';
const LABEL_41322 = 'component_41322';
export function Component41322({ value = 41322, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41322, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41322, 'data-value': derived.doubled }, children);
}
export default Component41322;
