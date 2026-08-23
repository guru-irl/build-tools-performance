import React from 'react';
const LABEL_34728 = 'component_34728';
export function Component34728({ value = 34728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34728, 'data-value': derived.doubled }, children);
}
export default Component34728;
