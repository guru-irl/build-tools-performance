import React from 'react';
const LABEL_22609 = 'component_22609';
export function Component22609({ value = 22609, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22609, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22609, 'data-value': derived.doubled }, children);
}
export default Component22609;
