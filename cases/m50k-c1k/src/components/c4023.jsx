import React from 'react';
const LABEL_4023 = 'component_4023';
export function Component4023({ value = 4023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4023, 'data-value': derived.doubled }, children);
}
export default Component4023;
