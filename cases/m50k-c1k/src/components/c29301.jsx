import React from 'react';
const LABEL_29301 = 'component_29301';
export function Component29301({ value = 29301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29301, 'data-value': derived.doubled }, children);
}
export default Component29301;
