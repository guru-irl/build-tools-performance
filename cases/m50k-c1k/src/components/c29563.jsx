import React from 'react';
const LABEL_29563 = 'component_29563';
export function Component29563({ value = 29563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29563, 'data-value': derived.doubled }, children);
}
export default Component29563;
