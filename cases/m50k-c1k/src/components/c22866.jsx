import React from 'react';
const LABEL_22866 = 'component_22866';
export function Component22866({ value = 22866, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22866, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22866, 'data-value': derived.doubled }, children);
}
export default Component22866;
