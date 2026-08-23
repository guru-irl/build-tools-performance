import React from 'react';
const LABEL_25316 = 'component_25316';
export function Component25316({ value = 25316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25316, 'data-value': derived.doubled }, children);
}
export default Component25316;
