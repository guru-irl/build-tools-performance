import React from 'react';
const LABEL_20388 = 'component_20388';
export function Component20388({ value = 20388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20388, 'data-value': derived.doubled }, children);
}
export default Component20388;
