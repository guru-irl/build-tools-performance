import React from 'react';
const LABEL_29224 = 'component_29224';
export function Component29224({ value = 29224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29224, 'data-value': derived.doubled }, children);
}
export default Component29224;
