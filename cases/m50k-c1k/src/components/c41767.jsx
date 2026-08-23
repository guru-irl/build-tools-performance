import React from 'react';
const LABEL_41767 = 'component_41767';
export function Component41767({ value = 41767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41767, 'data-value': derived.doubled }, children);
}
export default Component41767;
