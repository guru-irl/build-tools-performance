import React from 'react';
const LABEL_44953 = 'component_44953';
export function Component44953({ value = 44953, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44953, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44953, 'data-value': derived.doubled }, children);
}
export default Component44953;
