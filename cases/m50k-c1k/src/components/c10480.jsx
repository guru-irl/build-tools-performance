import React from 'react';
const LABEL_10480 = 'component_10480';
export function Component10480({ value = 10480, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10480, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10480, 'data-value': derived.doubled }, children);
}
export default Component10480;
