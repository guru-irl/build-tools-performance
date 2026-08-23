import React from 'react';
const LABEL_41752 = 'component_41752';
export function Component41752({ value = 41752, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41752, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41752, 'data-value': derived.doubled }, children);
}
export default Component41752;
