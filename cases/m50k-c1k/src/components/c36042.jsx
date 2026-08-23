import React from 'react';
const LABEL_36042 = 'component_36042';
export function Component36042({ value = 36042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36042, 'data-value': derived.doubled }, children);
}
export default Component36042;
