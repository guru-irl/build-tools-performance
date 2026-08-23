import React from 'react';
const LABEL_19479 = 'component_19479';
export function Component19479({ value = 19479, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19479, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19479, 'data-value': derived.doubled }, children);
}
export default Component19479;
