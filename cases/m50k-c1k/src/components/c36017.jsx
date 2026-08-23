import React from 'react';
const LABEL_36017 = 'component_36017';
export function Component36017({ value = 36017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36017, 'data-value': derived.doubled }, children);
}
export default Component36017;
