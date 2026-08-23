import React from 'react';
const LABEL_20982 = 'component_20982';
export function Component20982({ value = 20982, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20982, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20982, 'data-value': derived.doubled }, children);
}
export default Component20982;
