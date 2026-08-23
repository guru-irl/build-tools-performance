import React from 'react';
const LABEL_38017 = 'component_38017';
export function Component38017({ value = 38017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38017, 'data-value': derived.doubled }, children);
}
export default Component38017;
