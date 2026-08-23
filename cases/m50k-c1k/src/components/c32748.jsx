import React from 'react';
const LABEL_32748 = 'component_32748';
export function Component32748({ value = 32748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32748, 'data-value': derived.doubled }, children);
}
export default Component32748;
