import React from 'react';
const LABEL_20964 = 'component_20964';
export function Component20964({ value = 20964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20964, 'data-value': derived.doubled }, children);
}
export default Component20964;
