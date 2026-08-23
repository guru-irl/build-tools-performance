import React from 'react';
const LABEL_38579 = 'component_38579';
export function Component38579({ value = 38579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38579, 'data-value': derived.doubled }, children);
}
export default Component38579;
