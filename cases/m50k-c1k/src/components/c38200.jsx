import React from 'react';
const LABEL_38200 = 'component_38200';
export function Component38200({ value = 38200, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38200, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38200, 'data-value': derived.doubled }, children);
}
export default Component38200;
