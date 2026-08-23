import React from 'react';
const LABEL_29456 = 'component_29456';
export function Component29456({ value = 29456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29456, 'data-value': derived.doubled }, children);
}
export default Component29456;
