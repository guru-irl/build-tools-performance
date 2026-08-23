import React from 'react';
const LABEL_19672 = 'component_19672';
export function Component19672({ value = 19672, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19672, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19672, 'data-value': derived.doubled }, children);
}
export default Component19672;
