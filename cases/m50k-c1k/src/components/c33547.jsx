import React from 'react';
const LABEL_33547 = 'component_33547';
export function Component33547({ value = 33547, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33547, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33547, 'data-value': derived.doubled }, children);
}
export default Component33547;
