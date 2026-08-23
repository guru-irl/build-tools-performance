import React from 'react';
const LABEL_24706 = 'component_24706';
export function Component24706({ value = 24706, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24706, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24706, 'data-value': derived.doubled }, children);
}
export default Component24706;
