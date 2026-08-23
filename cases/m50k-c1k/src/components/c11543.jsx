import React from 'react';
const LABEL_11543 = 'component_11543';
export function Component11543({ value = 11543, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11543, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11543, 'data-value': derived.doubled }, children);
}
export default Component11543;
