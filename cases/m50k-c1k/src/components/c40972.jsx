import React from 'react';
const LABEL_40972 = 'component_40972';
export function Component40972({ value = 40972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40972, 'data-value': derived.doubled }, children);
}
export default Component40972;
