import React from 'react';
const LABEL_7470 = 'component_7470';
export function Component7470({ value = 7470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7470, 'data-value': derived.doubled }, children);
}
export default Component7470;
