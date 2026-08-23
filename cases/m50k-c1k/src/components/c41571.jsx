import React from 'react';
const LABEL_41571 = 'component_41571';
export function Component41571({ value = 41571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41571, 'data-value': derived.doubled }, children);
}
export default Component41571;
