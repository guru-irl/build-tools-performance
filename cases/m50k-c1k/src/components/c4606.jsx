import React from 'react';
const LABEL_4606 = 'component_4606';
export function Component4606({ value = 4606, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4606, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4606, 'data-value': derived.doubled }, children);
}
export default Component4606;
