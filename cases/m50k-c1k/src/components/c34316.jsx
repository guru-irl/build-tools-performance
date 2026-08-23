import React from 'react';
const LABEL_34316 = 'component_34316';
export function Component34316({ value = 34316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34316, 'data-value': derived.doubled }, children);
}
export default Component34316;
