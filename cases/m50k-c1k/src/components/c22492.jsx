import React from 'react';
const LABEL_22492 = 'component_22492';
export function Component22492({ value = 22492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22492, 'data-value': derived.doubled }, children);
}
export default Component22492;
