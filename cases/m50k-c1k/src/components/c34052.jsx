import React from 'react';
const LABEL_34052 = 'component_34052';
export function Component34052({ value = 34052, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34052, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34052, 'data-value': derived.doubled }, children);
}
export default Component34052;
