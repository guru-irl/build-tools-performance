import React from 'react';
const LABEL_27316 = 'component_27316';
export function Component27316({ value = 27316, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27316, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27316, 'data-value': derived.doubled }, children);
}
export default Component27316;
