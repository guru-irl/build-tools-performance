import React from 'react';
const LABEL_29489 = 'component_29489';
export function Component29489({ value = 29489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29489, 'data-value': derived.doubled }, children);
}
export default Component29489;
