import React from 'react';
const LABEL_29580 = 'component_29580';
export function Component29580({ value = 29580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29580, 'data-value': derived.doubled }, children);
}
export default Component29580;
