import React from 'react';
const LABEL_11066 = 'component_11066';
export function Component11066({ value = 11066, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11066, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11066, 'data-value': derived.doubled }, children);
}
export default Component11066;
