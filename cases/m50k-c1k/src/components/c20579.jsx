import React from 'react';
const LABEL_20579 = 'component_20579';
export function Component20579({ value = 20579, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20579, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20579, 'data-value': derived.doubled }, children);
}
export default Component20579;
