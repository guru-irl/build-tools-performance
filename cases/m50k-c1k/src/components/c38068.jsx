import React from 'react';
const LABEL_38068 = 'component_38068';
export function Component38068({ value = 38068, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38068, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38068, 'data-value': derived.doubled }, children);
}
export default Component38068;
