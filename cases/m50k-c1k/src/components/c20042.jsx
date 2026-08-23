import React from 'react';
const LABEL_20042 = 'component_20042';
export function Component20042({ value = 20042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20042, 'data-value': derived.doubled }, children);
}
export default Component20042;
