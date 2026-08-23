import React from 'react';
const LABEL_13748 = 'component_13748';
export function Component13748({ value = 13748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13748, 'data-value': derived.doubled }, children);
}
export default Component13748;
