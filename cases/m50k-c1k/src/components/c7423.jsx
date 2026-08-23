import React from 'react';
const LABEL_7423 = 'component_7423';
export function Component7423({ value = 7423, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7423, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7423, 'data-value': derived.doubled }, children);
}
export default Component7423;
