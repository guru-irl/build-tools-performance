import React from 'react';
const LABEL_34660 = 'component_34660';
export function Component34660({ value = 34660, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34660, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34660, 'data-value': derived.doubled }, children);
}
export default Component34660;
