import React from 'react';
const LABEL_40748 = 'component_40748';
export function Component40748({ value = 40748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40748, 'data-value': derived.doubled }, children);
}
export default Component40748;
