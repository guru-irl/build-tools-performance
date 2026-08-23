import React from 'react';
const LABEL_41989 = 'component_41989';
export function Component41989({ value = 41989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41989, 'data-value': derived.doubled }, children);
}
export default Component41989;
