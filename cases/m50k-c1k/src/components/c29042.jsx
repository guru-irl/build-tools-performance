import React from 'react';
const LABEL_29042 = 'component_29042';
export function Component29042({ value = 29042, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29042, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29042, 'data-value': derived.doubled }, children);
}
export default Component29042;
