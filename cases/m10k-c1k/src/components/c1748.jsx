import React from 'react';
const LABEL_1748 = 'component_1748';
export function Component1748({ value = 1748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1748, 'data-value': derived.doubled }, children);
}
export default Component1748;
