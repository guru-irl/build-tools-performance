import React from 'react';
const LABEL_36388 = 'component_36388';
export function Component36388({ value = 36388, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36388, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36388, 'data-value': derived.doubled }, children);
}
export default Component36388;
