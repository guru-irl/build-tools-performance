import React from 'react';
const LABEL_38086 = 'component_38086';
export function Component38086({ value = 38086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38086, 'data-value': derived.doubled }, children);
}
export default Component38086;
