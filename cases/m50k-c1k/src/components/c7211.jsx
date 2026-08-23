import React from 'react';
const LABEL_7211 = 'component_7211';
export function Component7211({ value = 7211, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7211, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7211, 'data-value': derived.doubled }, children);
}
export default Component7211;
