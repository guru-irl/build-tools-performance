import React from 'react';
const LABEL_16022 = 'component_16022';
export function Component16022({ value = 16022, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16022, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16022, 'data-value': derived.doubled }, children);
}
export default Component16022;
