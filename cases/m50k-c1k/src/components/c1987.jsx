import React from 'react';
const LABEL_1987 = 'component_1987';
export function Component1987({ value = 1987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1987, 'data-value': derived.doubled }, children);
}
export default Component1987;
