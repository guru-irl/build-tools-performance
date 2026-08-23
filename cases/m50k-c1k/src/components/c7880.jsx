import React from 'react';
const LABEL_7880 = 'component_7880';
export function Component7880({ value = 7880, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7880, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7880, 'data-value': derived.doubled }, children);
}
export default Component7880;
