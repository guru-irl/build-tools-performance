import React from 'react';
const LABEL_38175 = 'component_38175';
export function Component38175({ value = 38175, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38175, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38175, 'data-value': derived.doubled }, children);
}
export default Component38175;
