import React from 'react';
const LABEL_19972 = 'component_19972';
export function Component19972({ value = 19972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19972, 'data-value': derived.doubled }, children);
}
export default Component19972;
