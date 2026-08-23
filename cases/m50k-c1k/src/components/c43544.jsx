import React from 'react';
const LABEL_43544 = 'component_43544';
export function Component43544({ value = 43544, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43544, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43544, 'data-value': derived.doubled }, children);
}
export default Component43544;
