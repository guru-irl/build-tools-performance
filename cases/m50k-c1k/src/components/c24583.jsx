import React from 'react';
const LABEL_24583 = 'component_24583';
export function Component24583({ value = 24583, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24583, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24583, 'data-value': derived.doubled }, children);
}
export default Component24583;
