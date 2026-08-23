import React from 'react';
const LABEL_4594 = 'component_4594';
export function Component4594({ value = 4594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4594, 'data-value': derived.doubled }, children);
}
export default Component4594;
