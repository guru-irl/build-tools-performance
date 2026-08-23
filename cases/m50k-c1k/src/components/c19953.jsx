import React from 'react';
const LABEL_19953 = 'component_19953';
export function Component19953({ value = 19953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19953, 'data-value': derived.doubled }, children);
}
export default Component19953;
