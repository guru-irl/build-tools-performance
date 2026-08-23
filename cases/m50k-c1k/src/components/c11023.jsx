import React from 'react';
const LABEL_11023 = 'component_11023';
export function Component11023({ value = 11023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11023, 'data-value': derived.doubled }, children);
}
export default Component11023;
