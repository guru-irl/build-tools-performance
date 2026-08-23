import React from 'react';
const LABEL_22303 = 'component_22303';
export function Component22303({ value = 22303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22303, 'data-value': derived.doubled }, children);
}
export default Component22303;
