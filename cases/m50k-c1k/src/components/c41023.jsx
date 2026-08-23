import React from 'react';
const LABEL_41023 = 'component_41023';
export function Component41023({ value = 41023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41023, 'data-value': derived.doubled }, children);
}
export default Component41023;
