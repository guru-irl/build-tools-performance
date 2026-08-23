import React from 'react';
const LABEL_34703 = 'component_34703';
export function Component34703({ value = 34703, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34703, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34703, 'data-value': derived.doubled }, children);
}
export default Component34703;
