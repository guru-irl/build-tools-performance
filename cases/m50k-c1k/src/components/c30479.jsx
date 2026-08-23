import React from 'react';
const LABEL_30479 = 'component_30479';
export function Component30479({ value = 30479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30479, 'data-value': derived.doubled }, children);
}
export default Component30479;
