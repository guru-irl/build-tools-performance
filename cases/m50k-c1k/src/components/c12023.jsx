import React from 'react';
const LABEL_12023 = 'component_12023';
export function Component12023({ value = 12023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12023, 'data-value': derived.doubled }, children);
}
export default Component12023;
