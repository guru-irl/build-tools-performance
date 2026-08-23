import React from 'react';
const LABEL_11205 = 'component_11205';
export function Component11205({ value = 11205, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11205, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11205, 'data-value': derived.doubled }, children);
}
export default Component11205;
