import React from 'react';
const LABEL_16023 = 'component_16023';
export function Component16023({ value = 16023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16023, 'data-value': derived.doubled }, children);
}
export default Component16023;
