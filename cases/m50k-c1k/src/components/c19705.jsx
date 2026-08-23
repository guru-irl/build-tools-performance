import React from 'react';
const LABEL_19705 = 'component_19705';
export function Component19705({ value = 19705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19705, 'data-value': derived.doubled }, children);
}
export default Component19705;
