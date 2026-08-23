import React from 'react';
const LABEL_13313 = 'component_13313';
export function Component13313({ value = 13313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13313, 'data-value': derived.doubled }, children);
}
export default Component13313;
