import React from 'react';
const LABEL_13518 = 'component_13518';
export function Component13518({ value = 13518, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13518, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13518, 'data-value': derived.doubled }, children);
}
export default Component13518;
