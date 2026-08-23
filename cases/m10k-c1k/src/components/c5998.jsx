import React from 'react';
const LABEL_5998 = 'component_5998';
export function Component5998({ value = 5998, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5998, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5998, 'data-value': derived.doubled }, children);
}
export default Component5998;
