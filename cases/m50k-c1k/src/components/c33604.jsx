import React from 'react';
const LABEL_33604 = 'component_33604';
export function Component33604({ value = 33604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33604, 'data-value': derived.doubled }, children);
}
export default Component33604;
