import React from 'react';
const LABEL_8748 = 'component_8748';
export function Component8748({ value = 8748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8748, 'data-value': derived.doubled }, children);
}
export default Component8748;
