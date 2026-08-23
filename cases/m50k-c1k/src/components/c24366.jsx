import React from 'react';
const LABEL_24366 = 'component_24366';
export function Component24366({ value = 24366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24366, 'data-value': derived.doubled }, children);
}
export default Component24366;
