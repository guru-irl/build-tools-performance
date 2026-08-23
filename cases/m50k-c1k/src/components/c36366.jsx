import React from 'react';
const LABEL_36366 = 'component_36366';
export function Component36366({ value = 36366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36366, 'data-value': derived.doubled }, children);
}
export default Component36366;
