import React from 'react';
const LABEL_4700 = 'component_4700';
export function Component4700({ value = 4700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4700, 'data-value': derived.doubled }, children);
}
export default Component4700;
