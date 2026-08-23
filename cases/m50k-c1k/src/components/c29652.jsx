import React from 'react';
const LABEL_29652 = 'component_29652';
export function Component29652({ value = 29652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29652, 'data-value': derived.doubled }, children);
}
export default Component29652;
