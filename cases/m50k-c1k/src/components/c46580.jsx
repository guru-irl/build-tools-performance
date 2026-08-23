import React from 'react';
const LABEL_46580 = 'component_46580';
export function Component46580({ value = 46580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46580, 'data-value': derived.doubled }, children);
}
export default Component46580;
