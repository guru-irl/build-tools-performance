import React from 'react';
const LABEL_22615 = 'component_22615';
export function Component22615({ value = 22615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22615, 'data-value': derived.doubled }, children);
}
export default Component22615;
