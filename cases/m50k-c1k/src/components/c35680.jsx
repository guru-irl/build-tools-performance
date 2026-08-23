import React from 'react';
const LABEL_35680 = 'component_35680';
export function Component35680({ value = 35680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35680, 'data-value': derived.doubled }, children);
}
export default Component35680;
