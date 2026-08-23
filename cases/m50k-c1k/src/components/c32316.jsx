import React from 'react';
const LABEL_32316 = 'component_32316';
export function Component32316({ value = 32316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32316, 'data-value': derived.doubled }, children);
}
export default Component32316;
