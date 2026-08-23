import React from 'react';
const LABEL_20023 = 'component_20023';
export function Component20023({ value = 20023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20023, 'data-value': derived.doubled }, children);
}
export default Component20023;
