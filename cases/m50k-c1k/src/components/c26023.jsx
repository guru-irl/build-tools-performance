import React from 'react';
const LABEL_26023 = 'component_26023';
export function Component26023({ value = 26023, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26023, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26023, 'data-value': derived.doubled }, children);
}
export default Component26023;
