import React from 'react';
const LABEL_18929 = 'component_18929';
export function Component18929({ value = 18929, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18929, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18929, 'data-value': derived.doubled }, children);
}
export default Component18929;
