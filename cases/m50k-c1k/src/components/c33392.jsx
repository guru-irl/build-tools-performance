import React from 'react';
const LABEL_33392 = 'component_33392';
export function Component33392({ value = 33392, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33392, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33392, 'data-value': derived.doubled }, children);
}
export default Component33392;
