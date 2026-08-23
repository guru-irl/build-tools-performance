import React from 'react';
const LABEL_4042 = 'component_4042';
export function Component4042({ value = 4042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4042, 'data-value': derived.doubled }, children);
}
export default Component4042;
