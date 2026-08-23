import React from 'react';
const LABEL_1543 = 'component_1543';
export function Component1543({ value = 1543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1543, 'data-value': derived.doubled }, children);
}
export default Component1543;
