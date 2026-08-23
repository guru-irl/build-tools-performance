import React from 'react';
const LABEL_38281 = 'component_38281';
export function Component38281({ value = 38281, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38281, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38281, 'data-value': derived.doubled }, children);
}
export default Component38281;
