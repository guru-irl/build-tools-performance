import React from 'react';
const LABEL_45909 = 'component_45909';
export function Component45909({ value = 45909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45909, 'data-value': derived.doubled }, children);
}
export default Component45909;
