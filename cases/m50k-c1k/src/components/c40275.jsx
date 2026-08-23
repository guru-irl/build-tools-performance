import React from 'react';
const LABEL_40275 = 'component_40275';
export function Component40275({ value = 40275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40275, 'data-value': derived.doubled }, children);
}
export default Component40275;
