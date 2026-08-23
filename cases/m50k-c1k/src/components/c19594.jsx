import React from 'react';
const LABEL_19594 = 'component_19594';
export function Component19594({ value = 19594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19594, 'data-value': derived.doubled }, children);
}
export default Component19594;
