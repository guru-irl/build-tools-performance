import React from 'react';
const LABEL_13112 = 'component_13112';
export function Component13112({ value = 13112, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13112, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13112, 'data-value': derived.doubled }, children);
}
export default Component13112;
