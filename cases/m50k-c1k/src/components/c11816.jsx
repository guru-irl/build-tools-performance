import React from 'react';
const LABEL_11816 = 'component_11816';
export function Component11816({ value = 11816, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11816, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11816, 'data-value': derived.doubled }, children);
}
export default Component11816;
