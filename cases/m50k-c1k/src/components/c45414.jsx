import React from 'react';
const LABEL_45414 = 'component_45414';
export function Component45414({ value = 45414, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45414, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45414, 'data-value': derived.doubled }, children);
}
export default Component45414;
