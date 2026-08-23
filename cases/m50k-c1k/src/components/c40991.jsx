import React from 'react';
const LABEL_40991 = 'component_40991';
export function Component40991({ value = 40991, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40991, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40991, 'data-value': derived.doubled }, children);
}
export default Component40991;
