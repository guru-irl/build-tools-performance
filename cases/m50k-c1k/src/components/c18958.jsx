import React from 'react';
const LABEL_18958 = 'component_18958';
export function Component18958({ value = 18958, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18958, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18958, 'data-value': derived.doubled }, children);
}
export default Component18958;
