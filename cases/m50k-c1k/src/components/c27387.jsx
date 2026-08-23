import React from 'react';
const LABEL_27387 = 'component_27387';
export function Component27387({ value = 27387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27387, 'data-value': derived.doubled }, children);
}
export default Component27387;
