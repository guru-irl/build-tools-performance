import React from 'react';
const LABEL_37479 = 'component_37479';
export function Component37479({ value = 37479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37479, 'data-value': derived.doubled }, children);
}
export default Component37479;
