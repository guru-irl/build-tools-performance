import React from 'react';
const LABEL_34470 = 'component_34470';
export function Component34470({ value = 34470, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34470, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34470, 'data-value': derived.doubled }, children);
}
export default Component34470;
