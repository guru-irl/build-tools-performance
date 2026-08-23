import React from 'react';
const LABEL_29288 = 'component_29288';
export function Component29288({ value = 29288, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29288, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29288, 'data-value': derived.doubled }, children);
}
export default Component29288;
