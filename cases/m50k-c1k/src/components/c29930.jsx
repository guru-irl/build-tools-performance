import React from 'react';
const LABEL_29930 = 'component_29930';
export function Component29930({ value = 29930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29930, 'data-value': derived.doubled }, children);
}
export default Component29930;
