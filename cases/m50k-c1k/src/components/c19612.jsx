import React from 'react';
const LABEL_19612 = 'component_19612';
export function Component19612({ value = 19612, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19612, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19612, 'data-value': derived.doubled }, children);
}
export default Component19612;
