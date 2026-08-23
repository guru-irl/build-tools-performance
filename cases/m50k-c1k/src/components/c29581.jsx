import React from 'react';
const LABEL_29581 = 'component_29581';
export function Component29581({ value = 29581, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29581, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29581, 'data-value': derived.doubled }, children);
}
export default Component29581;
