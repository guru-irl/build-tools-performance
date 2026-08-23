import React from 'react';
const LABEL_5023 = 'component_5023';
export function Component5023({ value = 5023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5023, 'data-value': derived.doubled }, children);
}
export default Component5023;
