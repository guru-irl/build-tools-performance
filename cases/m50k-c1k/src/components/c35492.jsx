import React from 'react';
const LABEL_35492 = 'component_35492';
export function Component35492({ value = 35492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35492, 'data-value': derived.doubled }, children);
}
export default Component35492;
