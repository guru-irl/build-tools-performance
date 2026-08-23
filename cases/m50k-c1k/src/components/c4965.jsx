import React from 'react';
const LABEL_4965 = 'component_4965';
export function Component4965({ value = 4965, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4965, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4965, 'data-value': derived.doubled }, children);
}
export default Component4965;
