import React from 'react';
const LABEL_42316 = 'component_42316';
export function Component42316({ value = 42316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42316, 'data-value': derived.doubled }, children);
}
export default Component42316;
