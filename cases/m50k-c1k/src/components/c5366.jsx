import React from 'react';
const LABEL_5366 = 'component_5366';
export function Component5366({ value = 5366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5366, 'data-value': derived.doubled }, children);
}
export default Component5366;
