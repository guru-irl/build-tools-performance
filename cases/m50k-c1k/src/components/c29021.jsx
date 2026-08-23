import React from 'react';
const LABEL_29021 = 'component_29021';
export function Component29021({ value = 29021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29021, 'data-value': derived.doubled }, children);
}
export default Component29021;
