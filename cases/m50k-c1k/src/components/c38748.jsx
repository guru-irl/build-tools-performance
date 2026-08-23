import React from 'react';
const LABEL_38748 = 'component_38748';
export function Component38748({ value = 38748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38748, 'data-value': derived.doubled }, children);
}
export default Component38748;
