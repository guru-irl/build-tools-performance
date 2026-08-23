import React from 'react';
const LABEL_4980 = 'component_4980';
export function Component4980({ value = 4980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4980, 'data-value': derived.doubled }, children);
}
export default Component4980;
