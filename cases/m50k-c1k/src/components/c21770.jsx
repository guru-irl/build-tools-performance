import React from 'react';
const LABEL_21770 = 'component_21770';
export function Component21770({ value = 21770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21770, 'data-value': derived.doubled }, children);
}
export default Component21770;
