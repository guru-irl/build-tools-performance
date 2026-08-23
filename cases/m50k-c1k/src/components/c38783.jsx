import React from 'react';
const LABEL_38783 = 'component_38783';
export function Component38783({ value = 38783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38783, 'data-value': derived.doubled }, children);
}
export default Component38783;
