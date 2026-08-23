import React from 'react';
const LABEL_37507 = 'component_37507';
export function Component37507({ value = 37507, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37507, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37507, 'data-value': derived.doubled }, children);
}
export default Component37507;
