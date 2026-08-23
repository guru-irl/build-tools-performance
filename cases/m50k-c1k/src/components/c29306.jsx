import React from 'react';
const LABEL_29306 = 'component_29306';
export function Component29306({ value = 29306, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29306, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29306, 'data-value': derived.doubled }, children);
}
export default Component29306;
