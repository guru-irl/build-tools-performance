import React from 'react';
const LABEL_4680 = 'component_4680';
export function Component4680({ value = 4680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4680, 'data-value': derived.doubled }, children);
}
export default Component4680;
