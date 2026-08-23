import React from 'react';
const LABEL_41680 = 'component_41680';
export function Component41680({ value = 41680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41680, 'data-value': derived.doubled }, children);
}
export default Component41680;
