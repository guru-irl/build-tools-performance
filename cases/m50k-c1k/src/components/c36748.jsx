import React from 'react';
const LABEL_36748 = 'component_36748';
export function Component36748({ value = 36748, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36748, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36748, 'data-value': derived.doubled }, children);
}
export default Component36748;
