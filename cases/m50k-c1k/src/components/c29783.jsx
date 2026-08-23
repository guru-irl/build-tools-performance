import React from 'react';
const LABEL_29783 = 'component_29783';
export function Component29783({ value = 29783, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29783, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29783, 'data-value': derived.doubled }, children);
}
export default Component29783;
