import React from 'react';
const LABEL_22567 = 'component_22567';
export function Component22567({ value = 22567, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22567, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22567, 'data-value': derived.doubled }, children);
}
export default Component22567;
