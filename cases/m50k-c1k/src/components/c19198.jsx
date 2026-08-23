import React from 'react';
const LABEL_19198 = 'component_19198';
export function Component19198({ value = 19198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19198, 'data-value': derived.doubled }, children);
}
export default Component19198;
