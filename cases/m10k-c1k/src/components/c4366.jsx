import React from 'react';
const LABEL_4366 = 'component_4366';
export function Component4366({ value = 4366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4366, 'data-value': derived.doubled }, children);
}
export default Component4366;
