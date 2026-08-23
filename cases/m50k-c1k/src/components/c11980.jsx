import React from 'react';
const LABEL_11980 = 'component_11980';
export function Component11980({ value = 11980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11980, 'data-value': derived.doubled }, children);
}
export default Component11980;
