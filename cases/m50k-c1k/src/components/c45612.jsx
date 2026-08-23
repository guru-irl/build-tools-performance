import React from 'react';
const LABEL_45612 = 'component_45612';
export function Component45612({ value = 45612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45612, 'data-value': derived.doubled }, children);
}
export default Component45612;
