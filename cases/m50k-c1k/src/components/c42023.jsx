import React from 'react';
const LABEL_42023 = 'component_42023';
export function Component42023({ value = 42023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42023, 'data-value': derived.doubled }, children);
}
export default Component42023;
