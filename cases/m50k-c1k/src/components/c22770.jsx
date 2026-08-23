import React from 'react';
const LABEL_22770 = 'component_22770';
export function Component22770({ value = 22770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22770, 'data-value': derived.doubled }, children);
}
export default Component22770;
