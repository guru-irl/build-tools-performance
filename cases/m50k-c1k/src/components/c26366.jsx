import React from 'react';
const LABEL_26366 = 'component_26366';
export function Component26366({ value = 26366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26366, 'data-value': derived.doubled }, children);
}
export default Component26366;
